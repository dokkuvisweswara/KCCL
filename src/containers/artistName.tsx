'use effect'
import { redirectUrl } from "@/utils/content";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ArtistName({data}: any) {

  const [getArtists, setArtists] = useState<any>([]);

  useEffect(() => {
    if (data.castncrew ) {
      setArtists([...data.castncrew.cast,  ...data.castncrew.crew])
    }

  }, [data])



    return (
      <>
        {(getArtists.length > 0) ?
          [getArtists[0]].map((item: any, i: number) => {
            return <Link key={i} href={redirectUrl(item)} className="cursor-pointer hover:underline text-primaryItemColor text-xs" onClick={(e: any) => e.stopPropagation()} >{item.name}</Link>;
          })
        :
        data && data.bandorartist && Array.isArray(data.bandorartist) && data?.bandorartist.map((item: any, i: number) => {
            return <span key={i}>{item}</span>;
          })
        }
      </>
    );
  }