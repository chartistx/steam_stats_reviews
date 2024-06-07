import { Input, Form, Button, Select, Row, Col, InputNumber } from "antd";

export default function SearcWindow(props) {
  const [form] = Form.useForm(); //create form instance

  const onFinish = (values) => {
    //save search values to state and close search window
    props.setSearchValues(values);
    props.clickSearch();
  };

  //runs if form submission fails
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const clearFilter = () => {
    //using set fields values to clear form because form.resetFields() is not clearing fields with initial values
    form.setFieldsValue({
      rank: null,
      game_name: "",
      platform: "",
      year: null,
      genre: "",
      publisher: "",
      na_sales: null,
      eu_sales: null,
      jp_sales: null,
      other_sales: null,
      global_sales: null,
      review_count: null,
    });
  };
  const cancelSearch = () => {
    //close search window
    props.clickSearch();
  };

  return (
    <div
      style={{
        paddingTop: "50px",
        backgroundColor: "SkyBlue",
        margin: "10px 0px 20px 0px",
        borderRadius: "10px",
      }}
    >
      <Row style={{ height: "80%" }}>
        <Col span={14} offset={3}>
          <Form
            form={form}
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
              key="rank+item"
              label="Rank"
              name="rank"
              rules={[
                {
                  required: false,
                  message: "Please input game rank!",
                },
              ]}
            >
              <InputNumber min="1" key="rank_input" />
            </Form.Item>
            <Form.Item
              key="game_name"
              label="Game Name"
              name="game_name"
              rules={[
                {
                  required: false,
                  message: "Please input game name!",
                },
              ]}
            >
              <Input key="game_name_input" />
            </Form.Item>
            <Form.Item
              key="platform"
              label="Platform"
              name="platform"
              rules={[
                {
                  required: false,
                  message: "Please input game platform!",
                },
              ]}
            >
              <Input key="platform_input" />
            </Form.Item>
            <Form.Item
              key="year"
              label="Year"
              name="year"
              rules={[
                {
                  required: false,
                  message: "Please input game year!",
                },
              ]}
            >
              <InputNumber min="0" key="year_input" />
            </Form.Item>
            <Form.Item
              key="genre"
              label="Genre"
              name="genre"
              rules={[
                {
                  required: false,
                  message: "Please input game genre!",
                },
              ]}
            >
              <Input key="genre_input" />
            </Form.Item>
            <Form.Item
              key="publisher"
              label="Publisher"
              name="publisher"
              rules={[
                {
                  required: false,
                  message: "Please input game publisher!",
                },
              ]}
            >
              <Input key="publisher_input" />
            </Form.Item>

            <Form.Item
              key="na_sales"
              label="NA Sales"
              name="na_sales"
              rules={[
                {
                  required: false,
                  message: "Please input game NA sales!",
                },
              ]}
            >
              <InputNumber
                min="0"
                step="0.01"
                precision="2"
                key="na_sales_input"
              />
            </Form.Item>

            <Form.Item
              key="eu_sales"
              label="EU Sales"
              name="eu_sales"
              rules={[
                {
                  required: false,
                  message: "Please input game EU sales!",
                },
              ]}
            >
              <InputNumber
                min="0"
                step="0.01"
                precision="2"
                key="eu_sales_input"
              />
            </Form.Item>

            <Form.Item
              key="jp_sales"
              label="JP Sales"
              name="jp_sales"
              rules={[
                {
                  required: false,
                  message: "Please input game JP sales!",
                },
              ]}
            >
              <InputNumber
                min="0"
                step="0.01"
                precision="2"
                key="jp_sales_input"
              />
            </Form.Item>

            <Form.Item
              key="other_sales"
              label="Other Sales"
              name="other_sales"
              rules={[
                {
                  required: false,
                  message: "Please input game other sales!",
                },
              ]}
            >
              <InputNumber
                min="0"
                step="0.01"
                precision="2"
                key="other_sales_input"
              />
            </Form.Item>

            <Form.Item
              key="global_sales"
              label="Global Sales"
              name="global_sales"
              rules={[
                {
                  required: false,
                  message: "Please input game globla sales!",
                },
              ]}
            >
              <InputNumber
                min="0"
                step="0.01"
                precision="2"
                key="global_sales_input"
              />
            </Form.Item>

            <Form.Item
              key="review_count"
              label="Review Count"
              name="review_count"
              rules={[
                {
                  required: false,
                  message: "Please input review count!",
                },
              ]}
            >
              <InputNumber min="0" key="review_count_input" />
            </Form.Item>
            <Row>
              <Col span={6} offset={6}>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button type="primary" danger onClick={cancelSearch}>
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button danger ghost onClick={clearFilter}>
                    Clear
                  </Button>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button type="primary" htmlType="submit">
                    Search
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
