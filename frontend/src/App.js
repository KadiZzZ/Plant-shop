import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";
import CheckoutPage from "./components/CheckoutPage";
import { CheckoutProvider } from './context/CheckoutContext';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title:'Замиокулькас', 
          img:'замиокулькасравен.jpg',
          desc:'Диаметр 12 см',
          category:'',
          price: '5490'
        },
        {
          id: 2,
          title:'Асплениум Осака', 
          img:'асплениумосака.jpg',
          desc:'Диаметр 12',
          category:'',
          price: '5890'
        },
        {
          id: 3,
          title:'Монстера Минима', 
          img:'монстера.jpg',
          desc:'Диаметр 12',
          category:'',
          price: '3290'
        },
        {
          id: 4,
          title:'Алоказия Регал Шилдс', 
          img:'алоказиярегалшилдс.jpg',
          desc:'Диаметр 12',
          category:'',
          price: '2490'
        },
        {
          id: 5,
          title:'Алоказия Драгон Скейл', 
          img:'алоказиядраконскейл.jpg',
          desc:'Диаметр 12',
          category:'',
          price: '2990'
        },
        {
          id: 6,
          title:'Монстера Минима', 
          img:'алоказияполли.jpg',
          desc:'Диаметр 12',
          category:'',
          price: '2290'
        },
        {
          id: 7,
          title:'Антуриум Кларинерверум', 
          img:'антуриумкларинерверум.jpg',
          desc:'Диаметр 12',
          category:'',
          price: '4490'
        },
        {
          id: 8,
          title:'Аглаонема Страйп', 
          img:'аглаонемастрайп.jpg',
          desc:'Диаметр 12',
          category:'',
          price: '3490'
        },
        {
          id: 9,
          title:'Эпипремнум Пиктус', 
          img:'эпипремнумпиктус.jpg',
          desc:'Диаметр 12',
          category:'',
          price: '6490'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <CheckoutProvider>  {/* Обернули CheckoutPage в CheckoutProvider */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Items
                      onShowItem={this.onShowItem}
                      items={this.state.items}
                      onAdd={this.addToOrder}
                    />
                    {this.state.showFullItem && (
                      <ShowFullItem
                        onAdd={this.addToOrder}
                        onShowItem={this.onShowItem}
                        item={this.state.fullItem}
                      />
                    )}
                  </>
                }
              />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </CheckoutProvider>
          <Footer />
        </div>
      </Router>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = this.state.orders.some((el) => el.id === item.id);
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
