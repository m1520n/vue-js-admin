<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Quick Example</h3>
    </div>
    <!-- /.box-header -->

    <!-- form start -->
    <form role="form">
      <div class="box-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Product name</label>
          <input type="text" class="form-control" placeholder="Enter product name..." :value="product.name">
        </div>
   
        <div class="form-group">
          <label>Description</label>
          <textarea class="form-control" rows="3" placeholder="Enter ..." :value="product.description"></textarea>
        </div>
        
        <div class="form-group">
          <label>Category</label>
          <select class="form-control" :value="product.category">
            <option v-for="category in categories">{{category}}</option>
          </select>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="product.active"> Product available
          </label>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-xs-3">
              <label>Weight</label>
              <input type="text" class="form-control" :value="product.weight">
            </div>
            <div class="col-xs-3">
              <label>unit</label>
              <select class="form-control" :value="product.weightUnit">
                <option v-for="unit in units.weight">{{unit}}</option>
              </select>
            </div>
            <div class="col-xs-3">
              <label>per</label>
              <input type="text" class="form-control" :value="product.weightPer">
            </div>
            <div class="col-xs-3">
              <label>unit</label>
              <select class="form-control" :value="product.weightPerUnit">
                <option v-for="unit in units.per">{{unit}}</option>
              </select>
            </div>
          </div>
        </div>

       <div class="form-group">
          <div class="row">
            <div class="col-xs-3">
              <label>Price</label>
              <input type="text" class="form-control" :value="product.price">
            </div>
            <div class="col-xs-3">
              <label>currency</label>
              <select class="form-control" :value="product.currency">
                <option v-for="currency in currencies">{{currency}}</option>
              </select>
            </div>
            <div class="col-xs-3">
              <label>per</label>
              <input type="text" class="form-control" :value="product.pricePer">
            </div>
            <div class="col-xs-3">
              <label>unit</label>
              <select class="form-control" :value="product.pricePerUnit">
                <option v-for="unit in units.per">{{unit}}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-xs-3">
              <label>Width</label>
              <input type="text" class="form-control" :value="product.width">
            </div>
            <div class="col-xs-3">
              <label>Height</label>
              <input type="text" class="form-control" :value="product.height">
            </div>
            <div class="col-xs-3">
              <label>Length</label>
              <input type="text" class="form-control" :value="product.length">
            </div>
            <div class="col-xs-3">
              <label>unit</label>
              <select class="form-control" :value="product.dimensionUnit">
                <option v-for="unit in units.dimensions">{{unit}}</option>
              </select>
            </div>
          </div>
        </div>

      </div>
      <!-- /.box-body -->

      <div class="box-footer">
        <button type="submit" class="btn btn-primary btn-flat">Save</button>
        <button type="submit" class="btn btn-warning btn-flat">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductEditForm',
  props: ['id'],
  data: function () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      categories: 'getCategories',
      units: 'getUnits',
      currencies: 'getCurrencies'
    }),
    product () {
      return this.products[this.id]
    }
  }
}
</script>

<style>
</style>
