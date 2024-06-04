import {Input, Form, Button, Select, Row, Col, InputNumber} from "antd";
import {Option} from 'antd/es/mentions';

export default function SearcWindow (props){
    // MUSt be wrapped in a useEffect
    // const rows = [];
    
    // for(let i=0; i<12; i++){
    //     rows.push(
            
    //         <Input
    //         style={{ borderColor: "royalBlue", backgroundColor: "lavender" }}
    //         placeholder="Type here" />);
    // }
   
    const onFinish = (values) => {
        console.log(values);
        props.setSearchValues(values);
        props.clickSearch();
        //send form data to server
        
    };
    
    //runs if form submission fails
    const onFinishFailed = (errorInfo) => {
        //console.log(state.record);
        
    };

    return (
        <div style={{paddingTop:"50px", backgroundColor:"SkyBlue", margin:"10px 0px 20px 0px", borderRadius:"10px"}}>
            {/* //position:"absolute", top: "100px", background:"LightGray", width:"100%", height:"75%",paddingTop:"10%"  */}
            <Row style={{height:'80%'}}>
            <Col span={14} offset={3}  >
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
                initialValues={props.searchValues}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                
            >
                <Form.Item
                label="Rank"
                name="rank"
                rules={[
                    {
                    required: false,
                    message: 'Please input game rank!',
                    },
                ]}
                >
                <InputNumber 
                    min="1"
                    
                    />
                </Form.Item>
                <Form.Item
                label="Game Name"
                name="game_name"
                rules={[
                    {
                    required: false,
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
                    required: false,
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
                    required: false,
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
                    required: false,
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
                    required: false,
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
                    required: false,
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
                    required: false,
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
                    required: false,
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
                    required: false,
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
                    required: false,
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
                label="Review Count"
                name="review_count"
                rules={[
                    {
                    required: false,
                    message: 'Please input review count!',
                    },
                ]}
                >
                <InputNumber 
                    min="0"
                  />
                </Form.Item>

                <Form.Item
                style={{textAlign:'center'}}
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                    
                <Button type="primary" htmlType="submit">
                    Search
                </Button>
                </Form.Item>
            </Form>
            </Col>
            </Row>
            
        
            {/* for(let i in range(0,5))
            <Input
              style={{ borderColor: "royalBlue", backgroundColor: "lavender" }}
              placeholder="Type here"
            //   value={1}//holds value of search input
            //   onChange={
            //     //on input change update saved value
            //     (e) => {
            //         //setSelectedKeys(e.target.value ? [e.target.value] : []);
                  
            //     }
            //   }
            //   onPressEnter={
            //     //on enter press search and filter table
            //     (e) => {
                  
            //     }
            //   }
            //   onBlur={
            //     //on clicking off from input window search and filter table
            //     (e) => {
                  
            //     }
            //   }
            /> */}
        
        </div>
        
    )
}