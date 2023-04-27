import {react} from 'react';

const Modal = () => {
    return(
        <div className="modalContainer">
            <div className="modalInfo">
                <div className="modalHeader">
                        <h4 className="modalTitle">Modal Title</h4>
                </div>
                <div className="modalBody">
                <p>Modal Body Here!</p>
                <button>Click Me!</button>
                </div>
                <div className="modalFooter">
                    <button>Basket Button Here</button>
                    <button className="modalBtn"> Close </button>
                </div>
            </div>
        </div>  
    )
}

export default Modal;