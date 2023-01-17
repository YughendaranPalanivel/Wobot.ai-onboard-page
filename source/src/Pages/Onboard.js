import { useEffect } from 'react';
import './Onboard.css';

function Onboard() {

    let activeOption = 0;

    const hoverOptions = (i, options) => {
        options[activeOption].classList.remove('active');
        options[i].classList.add('active');
        activeOption = i;
        setValue();
    }

    const setValue = () => {
        const select = document.querySelector('.select');
        const options = [...document.querySelectorAll('.options .item')];
        select.innerHTML = select.value = options[activeOption].innerHTML;
    }

    useEffect(()=>{
        const select = document.querySelector('.select');
        const optionBox = document.querySelector('.options');
        const options = [...document.querySelectorAll('.options .item')];

        options.forEach((item, i) => {
            item.onmousemove = () => {
                hoverOptions(i,options);
            }
        })

        window.onclick = (e) => {
            if(!e.target.className.includes('select')){
                select.classList.remove('active');
                optionBox.classList.remove('active');
            } else{
                select.classList.toggle('active');
                optionBox.classList.toggle('active');
            }
        }

        window.onkeydown = (e) => {
            if(select.className.includes('active')){
                e.preventDefault();
                if(e.key === 'ArrowDown' && activeOption < options.length - 1){
                    hoverOptions(activeOption + 1, options);
                } else if(e.key === 'ArrowUp' && activeOption > 0){
                    hoverOptions(activeOption - 1, options);
                } else if(e.key === 'Enter'){
                    select.classList.remove('active');
                    optionBox.classList.remove('active');
                }
            }
        }
        

        setValue();
    },[])
  return (
    <div className="onboard">
        <a href="https://wobot.ai/">
            <img className='app-logo' src="./wobot_logo.png" alt="logo" />
        </a>
        <div className='onboard-card'>
            <div className='onboard-logo-box'>
                <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="11.0477" height="27.8427" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 0.499878 24.0586)" fill="#3766E8"></rect>
                    <rect width="11.0477" height="42.3694" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 12.3904 8.65234)" fill="#3766E8"></rect>
                    <rect width="11.0477" height="21.5479" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 31.0594 5.73828)" fill="#3766E8"></rect>
                </svg>
            </div>
            <div className='onboard-content'>
                <h1 className='onboard-title'>
                    It's a delight to have you onboard
                </h1>
                <p className='onboard-description'>
                    Help us know you better.<br/>(This is how we optimize Wobot as per your business needs)
                </p>
                <form className='onboard-form-block' onSubmit={(events)=>{events.preventDefault();}}>
                    <div className='form-group'>
                        <label className='form-label'>Company name</label>
                        <input className='form-input' type="text" placeholder='e.g. Example Inc'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Industry</label>
                        {/* <input className='form-input' type="text" placeholder='Select'/> */}
                        <div className="container">
                            <button className="select" name="select" value="options">Select</button>
                            <div className="options">
                                <p className="item">Education</p>
                                <p className="item">Health Services</p>
                                <p className="item">Fintech</p>
                                <p className="item">Others</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Company Size</label>
                        <div className='form-radio-container'>
                            <input label="1-20" type="radio" id="size1" name="size" value="20"/>
                            <input label="21-50" type="radio" id="size2" name="size" value="40"/>
                            <input label="51-200" type="radio" id="size3" name="size" value="600"/>
                            <input label="201-500" type="radio" id="size4" name="size" value="80"/>
                            <input label="500+" type="radio" id="size5" name="size" value="100"/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <button className='form-input form-button'>Get Started</button>
                    </div>
                </form>
            </div>
        </div>
        <footer className='onboard-footer'>Terms of use  |  Privacy policy </footer>
    </div>
  );
}

export default Onboard;
