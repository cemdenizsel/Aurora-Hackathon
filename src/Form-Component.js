import React from 'react';
// import  {ConnectWalletComponent}  from './ConnectWalletComponent';
import { ConnectButton, useAccount, useConnectKit } from '@particle-network/connect-react-ui';

const FormComponent = () => {

  const account = useAccount(); // Get the account status using the useAccount hook
  const connectKit = useConnectKit();
  //const userInfo = connectKit.particle;
  if (account) {
    
    console.log(account);
  }

  return (
    <div className="card mb-5">
      <div className="card-body p-sm-5">
        <h2 className="text-center mb-4">Aurora Chat</h2>
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-1">
                Send Message
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2" id="show-messages-tab">
                Show Messages
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="tab-1">
              <form method="post">
                <div className="row">
                  <div className="col">
                    <input className="form-control" type="text" id="name-1" name="name" placeholder="Wallet Address" />
                  </div>
                  <div className="col">
                    {/* <button className="btn btn-primary d-block w-100" type="submit">
                      Connect Wallet
                    </button> */}
                    <ConnectButton />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="message-2" name="message" rows="6" placeholder="Message"></textarea>
                </div>
                <div>
                  <button className="btn btn-primary d-block w-100" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-2">
              <div className="accordion" role="tablist" id="accordion-1">
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-1"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-1"
                    >
                      Accordion Item
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                      <p className="mb-0">
                        Your messages will be shown here...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
