import React from 'react';
import HeaderComponent from './HeaderComponent.js';
import MainComponent from './MainComponent.js';
import FooterComponent from './FooterComponent.js';
import ModalComponent from './ModalComponent.js';

function WrapComponent(){
   const [show, setShow] = React.useState(false);
 
   // 모달열기 함수
   const modalOpen=()=>{ // MainComponent 에 부여해야함 왜냐면 섹션 2에서 오픈하니깐
     setShow(true);
   }
 
   // 모달닫기 함수
   const modalClose=()=>{ // Modal
     setShow(false);
   }

   return (
      <div id="wrap">
         <HeaderComponent/>
         <MainComponent modalOpen={modalOpen}/>
         <FooterComponent/>
      {
        show &&< ModalComponent modalClose={modalClose}/> /* 부모요소에서 핸들링 할 수 있음 */
      }
      </div>
   );
};

export default WrapComponent;