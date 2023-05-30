import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Items from "./components/Items";
import Categories from "./components/Categories";
import { ShowFullItem } from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "quidem molestiae enim",
          img: "photo-11.jpeg",
          desc: "quidem molestiae enim",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "sunt qui excepturi placeat culpa",
          img: "photo-13.jpeg",
          desc: "quidem molestiae enim",
          category: "tables",
          price: "149.99",
        },
        {
          id: 3,
          title: "omnis laborum odio",
          img: "photo-11.jpeg",
          desc: "quidem molestiae enim",
          category: "sofa",
          price: "59.99",
        },
        {
          id: 4,
          title: "non esse culpa molestiae omnis sed optio",
          img: "photo-13.jpeg",
          desc: "quidem molestiae enim",
          category: "chairs",
          price: "25.88",
        },
        {
          id: 5,
          title: "eaque aut omnis a",
          img: "photo-11.jpeg",
          desc: "quidem molestiae enim",
          category: "sofa",
          price: "49.99",
        },
        {
          id: 6,
          title: "natus impedit quibusdam illo est",
          img: "photo-13.jpeg",
          desc: "quidem molestiae enim",
          category: "tables",
          price: "150",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem}  item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({
      showFullItem: !this.state.showFullItem,
    });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
