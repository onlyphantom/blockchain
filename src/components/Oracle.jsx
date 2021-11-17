import React from "react";
import { Input, Alert, Form, Button } from "antd";

const Oracle = () => {

    const [val, setVal] = React.useState({})
    // const [api, setApi] = React.useState(null)
    const [amt, setAmt] = React.useState(0)

    // React.useEffect(()=>{
    //     fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken')
    //     .then(res => res.json())
    //     .then(data => setVal(data.result))
    // }, [])

    const formSubmit = (values) => {
        console.log("values", values)
        getApi(values.amount, values.apiKey)
    }

    const getApi = (amount, apiKey) => {

        const url = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle'

        if(apiKey) {
            console.log("Found apiKey. Using", apiKey)
            url += `&apikey=${apiKey}`
        }

        fetch(url)
        .then(res => res.json())
        .then(data => setVal(data.result))
    }

    return (    
        <Form
            onFinish={formSubmit}
            layout="vertical"
        >
            <h2>Gas Oracle from Etherscan</h2>
            <Form.Item name="apiKey" label="API Key">
                <Input.Password placeholder="Enter your Etherscan API key (Optional)" style={{width: '80%'}} />
            </Form.Item>
        
            <Form.Item 
                name="amount" 
                label="Amount"
                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
                <Input 
                    addonBefore="ETH"
                    placeholder="Amount of ETH To Transfer" 
                    // style={{width: '50%', marginTop: '1%'}}
                    onChange={(e) => setAmt(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label=" "
                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '-4px 8px' }}
            >
                <Button type="primary" htmlType="submit">
                    Get Estimate
                </Button>
            </Form.Item>
          
            <p style={{color: 'white'}}>
                {JSON.stringify(val)} 
            </p>
            <Alert
                description="⛽ The gas prices are returned in Gwei."
                type="info"
                showIcon />
        </Form>
    )
}

export default Oracle;