import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
<div className='flex flex-col items-center h-full'>
      <Skeleton className='mb-4' height={40} width={400} />
      {/* chat messages */}
      <div className='flex-1 w-full max-h-full overflow-y-scroll'>
        <div className='flex flex-col flex-auto h-full p-6'>
          <div className='flex flex-col flex-auto flex-shrink-0 h-full p-4 rounded-2xl bg-gray-50'>
            <div className='flex flex-col h-full mb-4 overflow-x-auto'>
              <div className='flex flex-col h-full'>
                <div className='grid grid-cols-12 gap-y-2'>
                  <div className='col-start-6 col-end-13 p-3 rounded-lg'>
                    <div className='flex flex-row-reverse items-center justify-start'>
                      <div className='relative w-10 h-10'>
                        <Skeleton width={40} height={40} borderRadius={999} />
                      </div>
                      <div className='relative px-4 py-2 mr-3 text-sm text-black bg-indigo-100 border border-gray-100 rounded-xl'>
                        <Skeleton className='ml-2' width={150} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className='col-start-6 col-end-13 p-3 rounded-lg'>
                    <div className='flex flex-row-reverse items-center justify-start'>
                      <div className='relative w-10 h-10'>
                        <Skeleton width={40} height={40} borderRadius={999} />
                      </div>
                      <div className='relative px-4 py-2 mr-3 text-sm text-black bg-indigo-100 border border-gray-100 rounded-xl'>
                        <Skeleton className='ml-2' width={150} height={20} />
                      </div>
                    </div>
                  </div>

                  {/* my messages */}
                  <div className='col-start-1 col-end-8 p-3 rounded-lg'>
                    <div className='flex flex-row items-center'>
                      <div className='relative w-10 h-10'>
                        <Skeleton width={40} height={40} borderRadius={999} />
                      </div>
                      <div className='relative px-4 py-2 ml-3 text-sm bg-white border border-gray-100 rounded-xl'>
                        <Skeleton className='ml-2' width={150} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className='col-start-6 col-end-13 p-3 rounded-lg'>
                    <div className='flex flex-row-reverse items-center justify-start'>
                      <div className='relative w-10 h-10'>
                        <Skeleton width={40} height={40} borderRadius={999} />
                      </div>
                      <div className='relative px-4 py-2 mr-3 text-sm text-black bg-indigo-100 border border-gray-100 rounded-xl'>
                        <Skeleton className='ml-2' width={150} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className='col-start-1 col-end-8 p-3 rounded-lg'>
                    <div className='flex flex-row items-center'>
                      <div className='relative w-10 h-10'>
                        <Skeleton width={40} height={40} borderRadius={999} />
                      </div>
                      <div className='relative px-4 py-2 ml-3 text-sm bg-white border border-gray-100 rounded-xl'>
                        <Skeleton className='ml-2' width={150} height={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chat input */}

      {/* <ChatInput
        chatPartner={chatPartner}
        img={session.user.image}
        chatId={chatId}
      /> */}
    </div>
  )
}

export default loading