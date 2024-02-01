'use client'

import { useState } from 'react'
import AgoraUIKit, { layout } from 'agora-react-uikit'

export default function Videocall() {
  const [videocall, setVideocall] = useState(false)
  const [isHost, setHost] = useState(true)
  const [isPinned, setPinned] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <div className='w-full h-full bg-[#007bff22] flex flex-1'>
      <div className='flex flex-col flex-1'>
        <h1 className='text-center mb-0 text-2xl font-semibold'>Agora Web UI Kit</h1>
        {videocall ? (<>
          <div className='flex justify-between'>
            <p className='text-[20px] w-52'>You are {isHost ? 'a host' : 'an audience'}</p>
            <p className='bg-[#007bff] px-2 py-1 cursor-pointer text-white rounded-md text-xl' onClick={() => setHost(!isHost)}>Change Role</p>
            <p className='bg-[#007bff] px-2 py-1 cursor-pointer text-white rounded-md text-xl' onClick={() => setPinned(!isPinned)}>Change Layout</p>
          </div>
            <AgoraUIKit
              rtcProps={{
                appId: 'f01e19b34b234c9aafac05037611260f',
                channel: 'test',
                token: null, //add your token if using app in secured mode
                role: isHost ? 'host' : 'audience',
                layout: isPinned ? layout.pin : layout.grid,
                enableScreensharing: true
              }}
              rtmProps={{username: username || 'user', displayUsername: true}}
              
              callbacks={{
                EndCall: () => setVideocall(false),
              }} />
          </>
        ) : (
          <div className='flex justify-between'>
              <input className='flex h-6' placeholder='nickname' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <h3 className='bg-[#007bff] px-2 py-1 cursor-pointer text-white rounded-md text-xl' onClick={() => setVideocall(true)}>Start Call</h3>
          </div>
        )}
      </div>
    </div>
  )
}
