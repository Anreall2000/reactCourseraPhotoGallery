import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries'

function listOfPhotos() {
  let arr = []
  for(let photo of entries.itemlist){
    arr.push(<PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} />)
  }
  return arr
}

class AlbumMaker extends React.Component {

  render() {

    return (
      <div className="flex-container">
        {listOfPhotos()}
        {/*<PhotoEntry src="berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" />*/}
      </div>
    )

  }

}

export default AlbumMaker;
