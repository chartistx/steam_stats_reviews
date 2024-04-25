import { useLocation } from 'react-router-dom';
import {Form, Input,InputNumber, Button, Row, Col} from 'antd';
import { useNavigate } from "react-router-dom";

export default function EditGame() {
    
    const { state } = useLocation();//get game data from previous page

    const navigate = useNavigate();//used for navigation

    //runs if form submission is successful
    const onFinish = (values) => {
        //request options
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        //send form data to server
        fetch(`http://localhost:5000/api/game/${state.record.id}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(`Response to add new game: ${data.id}`));
    
    
        //on row submit navigate back to game card, refresh to show changes
        navigate(`/games/${state.record.id}`, { state: { record: values } });
        window.location.reload();
    };

    //runs if form submission fails
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //create form for editing game data
    return (
        <>
        <Row>
            <Col span={24}>
                <h1 style={{textAlign:'center'}}>Edit Game</h1>
            </Col>
            
        </Row>
        <Row>
            <Col span={16} offset={5}>
                
                <Form
                    
                    name="basic"
                    labelCol={{
                    span: 8,
                    }}
                    wrapperCol={{
                    span: 16,
                    }}
                    style={{
                    maxWidth: 600,
                    }}
                    initialValues={state.record}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    
                    label="Rank"
                    name="rank"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game rank!',
                        },
                    ]}
                    >
                    <InputNumber 
                        value={1}
                        min="1"
                        
                        />
                    </Form.Item>
                    <Form.Item
                    
                    label="Game Name"
                    name="name"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game name!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="Platform"
                    name="platform"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game platform!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="Year"
                    name="year"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game year!',
                        },
                    ]}
                    >
                    <InputNumber 
                        min="0"
            
                    />
                    </Form.Item>
                    <Form.Item
                    label="Genre"
                    name="genre"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game genre!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="Publisher"
                    name="publisher"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game publisher!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    label="NA Sales"
                    name="na_sales"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game NA sales!',
                        },
                    ]}
                    >
                    <InputNumber 
                        min="0"
                        step="0.01"
                        precision="2"/>
                    </Form.Item>

                    <Form.Item
                    label="EU Sales"
                    name="eu_sales"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game EU sales!',
                        },
                    ]}
                    >
                    <InputNumber 
                        min="0"
                        step="0.01"
                        precision="2"/>
                    </Form.Item>

                    <Form.Item
                    label="JP Sales"
                    name="jp_sales"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game JP sales!',
                        },
                    ]}
                    >
                    <InputNumber 
                        min="0"
                        step="0.01"
                        precision="2"/>
                    </Form.Item>

                    <Form.Item
                    label="Other Sales"
                    name="other_sales"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game other sales!',
                        },
                    ]}
                    >
                    <InputNumber 
                        min="0"
                        step="0.01"
                        precision="2"/>
                    </Form.Item>

                    <Form.Item
                    
                    label="Global Sales"
                    name="global_sales"
                    rules={[
                        {
                        required: true,
                        message: 'Please input game globla sales!',
                        },
                    ]}
                    >
                    <InputNumber 
                        min="0"
                        step="0.01"
                        precision="2"/>
                    </Form.Item>

                    <Form.Item
                    style={{textAlign:'center'}}
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>

            
            </Col>
        </Row>
        </>
    );
}