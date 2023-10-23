import React from 'react';

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200'>
        <div className="animate-spin w-16 h-16 border-t-4 border-blue-500 border-solid border-opacity-25 rounded-full ">
          {/* <BookOpenIcon className="mx-auto h-8 w-8 text-indigo-200" /> */}
        </div>
    </div>


  )
}

export default Loading;