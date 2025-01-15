import {useRouter} from 'next/router';
export  default function detailPage(){
    const router=useRouter();
    const Id=router.query.newsId;
    return <>
      <h1>This news id is : {Id}</h1>
    </>
}