import React from "react";
import { Input, Alert } from "antd";

const Oracle = () => {

    const [val, setVal] = React.useState({})
    const [api, setApi] = React.useState(null)
    const [amt, setAmt] = React.useState(0)

    // React.useEffect(()=>{
    //     fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken')
    //     .then(res => res.json())
    //     .then(data => setVal(data.result))
    // }, [])

    const getApi = () => {
        const url = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle'

        if(api) {
            url += `&apikey=${api}`
        }

        fetch(url)
        .then(res => res.json())
        .then(data => setVal(data.result))
    }

    return (    
        <div>
            <h2>Gas Oracle from Etherscan</h2>
            <Input.Password placeholder="Enter your Etherscan API key (Optional)" style={{width: '80%'}} />
            <br/>
            <Input 
                addonBefore="ETH"
                placeholder="Amount of ETH To Transfer" 
                style={{width: '50%', marginTop: '1%'}}
                onChange={(e) => setAmt(e.target.value)}
            />
            <button onClick={() => getApi()} >
                Get Estimate
            </button>
            
            <p>
                {JSON.stringify(val)} 
            </p>
            <Alert
                description="⛽ The gas prices are returned in Gwei."
                type="info"
                showIcon />
        </div>
    )
}

export default Oracle;