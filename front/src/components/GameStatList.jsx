import { useState } from "react";
import { Table, Button, Input, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import SearchWindow from "./SearchWindow";

const GameStatList = ({ gameStats }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchValues, setSearchValues] = useState({
    //search data from search window, used for filtering
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

  //compare string values // used for sorting
  const compareVlues = (var1, var2) => {
    return var1 > var2 ? 1 : var1 === var2 ? 0 : -1;
  };

  //compare number values // used for sorting
  const compareNrVlues = (var1, var2) => {
    var1 = Number(var1);
    var2 = Number(var2);
    return var1 > var2 ? 1 : var1 === var2 ? 0 : -1;
  };
  //on row click navigate to specific game
  const handleClick = (record) => {
    navigate(`/games/${record.id}`, { state: { record: record } });
  };

  //clciked on add new game button
  const clickAddNewGame = () => {
    //go to NewGame.jsx // add new game page
    navigate(`/add_new_game`);
  };
  //clicked on search button
  const clickSearch = () => {
    //toggle show search window
    showSearch ? setShowSearch(false) : setShowSearch(true);
    //console.log(showSearch);
  };

  //column names used in table
  const columnNames = [
    {
      title: "rank",
      dataIndex: "rank",
      key: "rank",
      filteredValue: [searchValues.rank],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "null") {
          return true;
        }
        return record.rank.toString().toLowerCase().includes(value);
      },

      sorter: (row_1, row_2) => {
        return compareNrVlues(row_1.rank, row_2.rank);
      },
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      filteredValue: [searchValues.game_name],
      onFilter: (value, record) => {
        if (value === "") {
          return true;
        }
        //console.log(record);
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
      sorter: (row_1, row_2) => {
        return compareVlues(row_1.name, row_2.name);
      },
    },
    {
      title: "platform",
      dataIndex: "platform",
      key: "platform",
      filteredValue: [searchValues.platform],
      onFilter: (value, record) => {
        if (value === "") {
          return true;
        }
        return record.platform.toLowerCase().includes(value.toLowerCase());
      },
      sorter: (row_1, row_2) => {
        return compareVlues(row_1.platform, row_2.platform);
      },
    },
    {
      title: "year",
      dataIndex: "year",
      key: "year",
      filteredValue: [searchValues.year],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "null") {
          return true;
        }
        return record.year.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareNrVlues(row_1.year, row_2.year);
      },
    },
    {
      title: "genre",
      dataIndex: "genre",
      key: "genre",
      filteredValue: [searchValues.genre],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "") {
          return true;
        }
        return record.genre.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareVlues(row_1.genre, row_2.genre);
      },
    },
    {
      title: "publisher",
      dataIndex: "publisher",
      key: "publisher",
      filteredValue: [searchValues.publisher],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "") {
          return true;
        }
        return record.publisher.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareVlues(row_1.publisher, row_2.publisher);
      },
    },
    {
      title: "na_sales",
      dataIndex: "na_sales",
      key: "na_sales",
      filteredValue: [searchValues.na_sales],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "null") {
          return true;
        }
        return record.na_sales.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareNrVlues(row_1.na_sales, row_2.na_sales);
      },
    },
    {
      title: "eu_sales",
      dataIndex: "eu_sales",
      key: "eu_sales",
      filteredValue: [searchValues.eu_sales],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "null") {
          return true;
        }
        return record.eu_sales.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareNrVlues(row_1.eu_sales, row_2.eu_sales);
      },
    },
    {
      title: "jp_sales",
      dataIndex: "jp_sales",
      key: "jp_sales",
      filteredValue: [searchValues.jp_sales],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "null") {
          return true;
        }
        return record.jp_sales.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareNrVlues(row_1.jp_sales, row_2.jp_sales);
      },
    },
    {
      title: "other_sales",
      dataIndex: "other_sales",
      key: "other_sales",
      filteredValue: [searchValues.other_sales],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "null") {
          return true;
        }
        return record.other_sales.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareNrVlues(row_1.other_sales, row_2.other_sales);
      },
    },
    {
      title: "global_sales",
      dataIndex: "global_sales",
      key: "global_sales",
      filteredValue: [searchValues.global_sales],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "null") {
          return true;
        }
        return record.global_sales.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareNrVlues(row_1.global_sales, row_2.global_sales);
      },
    },
    {
      title: "review_count",
      dataIndex: "review_count",
      key: "review_count",
      filteredValue: [searchValues.review_count],
      onFilter: (value, record) => {
        //on search confirmation
        //convert nr to sring so it can be searched
        //value from search box and check if cell value contains search value
        //using lowercase to make search case insensitive

        if (value === "null") {
          return true;
        }
        return record.review_count.toString().toLowerCase().includes(value);
      },
      sorter: (row_1, row_2) => {
        return compareNrVlues(row_1.review_count, row_2.review_count);
      },
    },
  ];

  //create table with game statistics data and review count
  return (
    <>
      <Button type="primary" key="clickAddNewGame" onClick={clickAddNewGame}>
        Add New Game
      </Button>
      {
        //Toggle search button visibility
        !showSearch ? (
          <Button
            type="primary"
            key="clickSearch"
            style={{ float: "right" }}
            onClick={clickSearch}
          >
            Search
            <SearchOutlined
              style={{ color: "white", float: "right", marginTop: "5px" }}
            />
          </Button>
        ) : (
          <></>
        )
      }

      {
        //toogle between search window and data table when search button is clicked
        showSearch ? (
          <SearchWindow
            clickSearch={clickSearch}
            setSearchValues={setSearchValues}
            searchValues={searchValues}
          />
        ) : (
          <Table
            style={{ marginTop: 10 }}
            scroll={{
              x: window.innerWidth * 0.8,
            }}
            //check on click and redirect to game description and reviews
            span={18}
            onRow={(record) => {
              return {
                onClick: () => {
                  //clicked on row
                  // go to selected game description and select reviews
                  //go to GameCard.jsx
                  handleClick(record);
                },
              };
            }}
            columns={columnNames}
            dataSource={gameStats}
          ></Table>
        )
      }
    </>
  );
};
export default GameStatList;
