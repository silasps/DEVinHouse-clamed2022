import { useState, useRef, useEffect } from 'react';
import '../../App.css';

export default function DownloadSoftware() {
  const softwareObj = {
    nome: 'Silas Download',
    downloaded: 0,
    isDownloading: false
  }

  const [software, setSoftware] = useState(softwareObj)

  const intervalId = useRef(100);

  function iniciarDownload() {
    if (software.downloaded >= 100) {
        software.downloaded = 0
    }
    intervalId.current = setInterval(() => {
      setSoftware(prev => ({
        ...prev,
        isDownloading: true,
        downloaded: prev.downloaded += 1
      }))
    }, 50);
  }

  useEffect(() => {
    if (software.isDownloading && software.downloaded >= 100) {      
      clearInterval(intervalId.current)
      setSoftware(prev => ({
        ...prev,
        downlaoded: 0,
        isDownloading: false
      }))
    }
  }, [software])


  return (
    <div className='sistemas'>
      <div style={{ 'display': 'flex', 'flexDirection': 'column', 'maxWidth': '240px', 'margin': '0 auto', 'alignItems': 'center' }}>
        <h4>{software.nome} - {software.downloaded}</h4>
        <progress value={software.downloaded} min="0" max="100"></progress>
        <button onClick={iniciarDownload}>Download</button>
      </div>
    </div>
  )
}