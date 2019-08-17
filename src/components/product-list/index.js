import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ProductListItem from '../product-list-item'

class ProductList extends Component {
  static options = {
    addGlobalClass: true
  }

  render() {
    const { data: products } = this.props

    return (
      <View>
        {
          products.map(product =>
            <View className='cards' key={product.id}>
              <ProductListItem
                data={product}
                onClick={this.props.onClickListItem.bind(this, product)}
              />
            </View>
          )
        }
      </View>
    )
  }
}

export default ProductList
