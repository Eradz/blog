import React from 'react'

const Side_content = () => {
    const contents =[
        {image:'https://charts-static.billboard.com/img/2022/10/sam-smith-jw8-unholy-7a7-180x180.jpg',
         title: 'LATIN',
         subject: 'What Shakira Is Really Saying in Her New Song With Bizarrap '
        },
        {image:'https://charts-static.billboard.com/img/2009/04/drake-04g-180x180.jpg',
         title: 'R&B/Hip-Hop',
         subject: "Chartbreaker: Phony Ppl's Prospects are 'Up,' Thanks to a Timeless 80s Sample" 
        },
        
    ]
  return (
    <div className='flex flex-col '>
        {contents.map((content) => {
            return(
                <div className='flex gap-3 items-center p-4 border-b-2 border-b-gray_line' key={content.title}>
                    <img 
                    src={content.image}
                    alt={content.title}
                    className='w-[100px] h-[100px]'
                    />
                    <div className=''>
                        <div className='w-max'>
                        <p className='font-semibold pb-1'>{content.title}</p>
                        <div className='w-full h-1 bg-icon_blue '></div>
                        </div>
                        <p className='font-bold mt-2'>{content.subject}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Side_content