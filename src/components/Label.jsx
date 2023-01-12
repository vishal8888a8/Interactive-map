import React from 'react'
import './label.css'

export default function label() {
  return (
    <div className='wraper'>
        <div className='label'>
            <div className='text'><p>$ Usage</p></div>
            <div className='color_container'>
                <div className='item item1'></div>
                <div className='item item2'></div>
                <div className='item item3'></div>
                <div className='item item4'></div>
            </div>
        </div>
        <div className='label2'>
            <div className='color_container2'>
                <div className='item_small'>
                    <div className='box item1'></div>
                    <div><p>{'$24k - $36k'}</p></div>
                </div>
                <div className='item_small'>
                    <div className='box item2'></div>
                    <div><p>{'$16k - $24k'}</p></div>
                </div>
                <div className='item_small'>
                    <div className='box item3'></div>
                    <div><p>{'$8k - $16k'}</p></div>
                </div>
                <div className='item_small'>
                    <div className='box item4'></div>
                    <div><p>{'$0k - $8k'}</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}
