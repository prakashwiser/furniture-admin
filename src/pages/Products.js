import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Products = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://67346355a042ab85d119f3fa.mockapi.io/products`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const getData = () => {
    axios
      .get(`https://67346355a042ab85d119f3fa.mockapi.io/products`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://67346355a042ab85d119f3fa.mockapi.io/products/${id}`)
      .then(() => {
        getData();
      });
  };
  console.log(APIData);
  return (
    <>
      
      <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: 'grey', padding: '10px'}}>
        <div>Product Page</div>
        <Link className="btn btn-success" to="./AddProduct">
          Add New Products
        </Link>
      </div>
      <div className="container">
      <div>
        {APIData.length !== 0 ? (
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>S.No</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {APIData.map((data, index) => {
                return (
                  <Table.Row>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.price}</Table.Cell>
                    <Table.Cell>
                      <img
                        style={{ width: "60px" }}
                        src={
                          "https://github.com/prakashwiser/products/blob/main/" +
                          data.image
                        }
                        alt="images"
                      />
                    </Table.Cell>
                    <Table.Cell>{data.listingType}</Table.Cell>
                    <Table.Cell>
                      <Button
                        className="ui red button"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        ) : (
          <>No data</>
        )}
      </div>
      </div>
    </>
  );
};

export default Products;
