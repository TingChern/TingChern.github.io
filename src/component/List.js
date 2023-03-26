
export default function List({list, onclick, butimg}){
    return  (
        <div className="list">
            {list.map(video => <VideoBlock item={video} onclick={onclick} butimg={butimg}/>)}
        </div>
        );
}
  
function VideoBlock({item, onclick, butimg}){
return (
    <>
    <div className="videoblock">
        <Video video={item}></Video>
        <div className="videoTitle">{item.title}</div>
        <div className="buttonContainer"><Button  id={item.id} onClick={onclick} butimg={butimg}></Button></div>
    </div>
    </>
);
}

  function Video({video}){
    return (
      <>
        <div id={video.id} className="video">
          <img className="poster" src={video.img}></img>
        </div>
      
      </>
    );
  }
  
  function Button({id, onClick, butimg}){
    if(onClick){
        return (<div className="buttonstyle" onClick={onClick}>
                  <img  id={id}  src={butimg}/>
                </div>);
    }else{
        return (<></>);
    }
  }