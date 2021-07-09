import React from 'react'
function Side(){
    return(
        <section className='sidebar'>
            <div class="block col d-flex" style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
                <p>Новости</p>
            </div>
            <div class="block col d-flex">
                <p>Сообщения</p>
            </div>
            <div class="block col d-flex">
               <p>Настройки</p>
            </div>
        </section>
    );
}
export default Side