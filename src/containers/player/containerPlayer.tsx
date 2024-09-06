
'use client'
import { useStorePlayer, usePlayList, useStoreMakeSaveDetailLists } from '@/store/init';
import { useEffect, useState } from 'react';
import { filterContentdataSet, getAlbumPagePayload } from '@/player/helper/playerUtility'
import { getAccessTokenObj } from '@/services/helpers/init.helper';
import BasePlayer from './basePlayer';
import { actSectionData } from '@/services/actions/content.action'
import { notify } from '@/(layout)/v1/ToasterComponent';
import Script from 'next/script'
import { getPlaylistSongsAction } from '@/services/actions/playlist.actions';
import  { actGetAvailability }  from "@/services/actions/player.action"
import { errors_message } from '@/constants/errors_constants';

export default function ContainerPlayer ({lang}: any) {

    const setPrimaryPlayList = usePlayList((state: any) => state.setPrimaryPlayList);

    const detailListSave = useStoreMakeSaveDetailLists((state: any) => state.detailListSave);

    const [contentData, setContentData] = useState<any>(false);
    const [playerActive, setPlayerActive] = useState<any>(false);
    const [primaryPlayListLocalState, setPrimaryPlayListLocalState] = useState<any>(null);

    const [currentPlaybackTrack, setCurrentPlaybackTrack] = useState<any>(null);


    async function actTypeofObjectsetup (filteredPlayerObj: any) {

        if(filteredPlayerObj.category === "PODCAST" && filteredPlayerObj.objecttype === "SERIES") {  
            let episodePayload = getAlbumPagePayload (filteredPlayerObj.objectid, false);

            const EpData = await actSectionData(episodePayload, getAccessTokenObj());
            let PRIMARYPLAYLIST = [];
              if (EpData?.data && EpData.data.length > 0) {
                PRIMARYPLAYLIST = EpData.data.map( (singleItem: any, n: number) => {
                    return filterContentdataSet(singleItem, n)
                })
                setCurrentPlaybackTrack(0);
                setPrimaryPlayListLocalState(PRIMARYPLAYLIST)
              } else {
                notify(errors_message.NO_DATA_FOUND, "error");
              }

        } else if (filteredPlayerObj.category === "MUSIC" && filteredPlayerObj.objecttype === "ALBUM") { 
            let contentPayload = getAlbumPagePayload(filteredPlayerObj.objectid, true);
            const responseData = await actSectionData(contentPayload, getAccessTokenObj());

            let PRIMARYPLAYLIST = [];
            if (responseData?.data && responseData.data.length > 0) {
              PRIMARYPLAYLIST = responseData.data.map( (singleItem: any, n: number) => {
                  return filterContentdataSet(singleItem, n)
              })
              setCurrentPlaybackTrack(0);
              setPrimaryPlayListLocalState(PRIMARYPLAYLIST)
            } else {
                notify(errors_message.NO_DATA_FOUND, "error");
            }
        } else if (filteredPlayerObj.category === "AUDIOBOOK" && filteredPlayerObj.objecttype === "ALBUM") { 
            let contentPayload = getAlbumPagePayload(filteredPlayerObj.objectid, true, {category: ["AUDIOBOOK"]});
            const responseData = await actSectionData(contentPayload, getAccessTokenObj());

            let PRIMARYPLAYLIST = [];
            if (responseData?.data && responseData.data.length > 0) {
              PRIMARYPLAYLIST = responseData.data.map( (singleItem: any, n: number) => {
                  return filterContentdataSet(singleItem, n)
              })
              setCurrentPlaybackTrack(0);
              setPrimaryPlayListLocalState(PRIMARYPLAYLIST)
            } else {
                notify(errors_message.NO_DATA_FOUND, "error");
            }
        } else if (filteredPlayerObj.category === "MUSIC" && filteredPlayerObj.objecttype === "CONTENT" && filteredPlayerObj.albumid) { 
            let contentPayload = getAlbumPagePayload(filteredPlayerObj.albumid, true);
            let currentTrack = 0;
            let responseData:any = "";

            let listFromGlobal: any =  (window as any).DETAILPAGELISTTRACKS;
            if (detailListSave || listFromGlobal) {
                 responseData = listFromGlobal;
            } else {
                 responseData = await actSectionData(contentPayload, getAccessTokenObj());
                 responseData = responseData.data;
            }

            let PRIMARYPLAYLIST = [];
            if (responseData.length > 0) {
              PRIMARYPLAYLIST = responseData.map( (singleItem: any, n: number) => {
                        if (singleItem.objectid == filteredPlayerObj.objectid) {
                            currentTrack = n; 
                        }
                  return filterContentdataSet(singleItem, n)
              })
              setCurrentPlaybackTrack(currentTrack);
              
              setPrimaryPlayListLocalState(PRIMARYPLAYLIST)
            } else {
                notify(errors_message.NO_DATA_FOUND, "error");
            }
        } else if ( filteredPlayerObj.idplaylist && filteredPlayerObj.playliststatus) {    
                let payload = {
                    idplaylist: filteredPlayerObj.idplaylist,
                    page: 1,
                    pagesize: 15
                }
                const responseData:any = await getPlaylistSongsAction(payload, getAccessTokenObj());

                let PRIMARYPLAYLIST = [];
                if (responseData && responseData.length > 0) {
                  PRIMARYPLAYLIST = responseData.map( (singleItem: any, n: number) => {
                      return filterContentdataSet(singleItem, n)
                  })
                  setCurrentPlaybackTrack(filteredPlayerObj.selectedIndex || 0);
                  setPrimaryPlayListLocalState(PRIMARYPLAYLIST)
                } else {
                    notify(errors_message.NO_DATA_FOUND, "error");
    
                }
        

        } else {
            setPrimaryPlayListLocalState([filteredPlayerObj])
            setCurrentPlaybackTrack(0);
        }
    }

   function actPlaybackPreparedForLaunch (playbackInfo: any) {
        let filteredPlayerObj:any = {};

        if (playbackInfo.idplaylist && playbackInfo.playliststatus) {
            filteredPlayerObj = playbackInfo;
        } else {
            filteredPlayerObj = filterContentdataSet(playbackInfo, 0)
        }
        actTypeofObjectsetup(filteredPlayerObj);
        setContentData(filteredPlayerObj);
   }
    useEffect(() => {
        const unsubscribe = useStorePlayer.subscribe((state: any) => {
                setPlayerActive(true);
                let availabilities: any = localStorage.getItem('availabilities');

                if (availabilities == 'undefined' || !availabilities) {
                    let payload = { page: 1, pagesize: 15 };
                    actGetAvailability(payload, getAccessTokenObj()).then((avaibility) =>  { 
                        if (avaibility) {
                            localStorage.setItem('availabilities', JSON.stringify(avaibility))

                            actPlaybackPreparedForLaunch(state?.contentSelectedByPlayBtn);

                        } else {
                            notify(errors_message.AVAILABILITY_NOT_LOADED, "error");
                        }
                    });
                } else {
                    actPlaybackPreparedForLaunch(state?.contentSelectedByPlayBtn)
                }
              

                let item: any = document.getElementById('main-contain');
                if (item) {
                    item.style.marginBottom = "3rem";
                }

                let footerExtraHeight:any = document.getElementById('extra-footer-height');
                if (footerExtraHeight) {
                    footerExtraHeight.style.height = "6rem";
                }
               
        });
    
          return () => unsubscribe();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

      


    return (
        <>
            <Script src="/scripts/shaka-player.compiled.js" />
           { (playerActive && currentPlaybackTrack != null && primaryPlayListLocalState) && <BasePlayer currentPlaybackPosition={currentPlaybackTrack} primaryPlayListLocalState={primaryPlayListLocalState} contentData={contentData} lang={lang}></BasePlayer>}            

        </>
    )
}