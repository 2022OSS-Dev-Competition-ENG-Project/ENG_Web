/******주소 팝업창을 띄워줄 수 있는 파일****** */
import ReactDom from 'react-dom';
 
const PopupDom = ({ children }) => {
    const el = document.getElementById('popupDom');
    return ReactDom.createPortal(children, el);
};
 
export default PopupDom;