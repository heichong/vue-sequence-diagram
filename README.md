# vue-sequence-diagram

> Sequence Diagram for vue2

This work was inspired from https://github.com/echoma/text_sequence_diagram

![效果](https://heichong.github.io/vue-sequence-diagram/images/index.png)

## Build Setup

``` bash
npm install vue-sequence-diagram --save

```



## Usage
```
<template>
  <div id="app" style="width:100%;height:90vh;">
    <sequence-diagram :data-list="dataList" @line-click="onClick"/>
  </div>
</template>

<script>
import SequenceDiagram from './lib/SequenceDiagram'
export default {
  name: 'app',
  data () {
    return {
      dataList: [
        {
          label: '100ms',
          from: 'Conn Server',
          to: 'Safe Domain GW',
          note: 'new order request',
          isDash: 0
        },
        {
          label: '200ms',
          from: 'Safe Domain GW',
          to: 'Trade Gateway',
          note: 'authenticated',
          isDash: 0
        },
        {
          label: '300ms',
          from: 'Trade Gateway',
          to: 'Logic Control',
          note: 'internal protocol',
          isDash: 0
        },
        {
          label: '400ms',
          name: 'Logic Control',
          note: 'check param',
          isDash: 0
        },
        {
          label: '500ms',
          from: 'Logic Control',
          to: 'Order Manage',
          note: 'add new order',
          isDash: 0
        },
        {
          label: '600ms',
          from: 'Order Manage',
          to: 'Logic Control',
          note: 'order created',
          isDash: 0
        },
        {
          label: '700ms',
          from: 'Logic Control',
          to: 'Trade Gateway',
          note: 'success response',
          isDash: 1
        },
        {
          label: '800ms',
          from: 'Trade Gateway',
          to: 'Conn Server',
          note: 'success response',
          isDash: 1
        }
      ]
    }
  },
  components:{
    SequenceDiagram
  },
  methods:{
    onClick(index,data){
      alert("您点击了第"+(index+1)+"个")
    }
  }
}
</script>

<style>
</style>

```
