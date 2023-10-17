<script setup lang="ts">

import {ref} from "vue";
import {ElNotification} from "element-plus"
import {useComboStore} from "@/examples/combo/combo";

const languages = [
  {label: 'Сделка', value: 'Сделка'},
  {label: 'Контакт', value: 'Контакт'},
  {label: 'Компания', value: 'Компания'},
  {label: 'ОшибкаДляПримера', value: 'ОшибкаДляПримера'}
]
const language = ref('')
const comboStore = useComboStore()
const isWaiting = ref(false)
const tableData = ref([])

function selectTable() {
  ElNotification({
    message: 'val',
    type: 'success'
  })
}

function addDatas(value: string): void {
  comboStore.getContacts(value).then((res: Array<Object>) => {
    if (res) {
      res.forEach((el: Object) => el.name = el.name || el.body)
      tableData.value.push(...res)
      ElNotification({
        message: 'Данные успешно добавлены в таблицу',
        type: 'success'
      })
    }
    setTimeout(() => isWaiting.value = false, 300)
  })
}

function clearTable() {
  tableData.value = []
  language.value = ''
}

function clicked() {
  isWaiting.value = true

  switch (language.value) {
    case 'Сделка':
      return addDatas('posts')
    case 'Контакт':
      return addDatas('comments')
    case 'Компания':
      return addDatas('users')
    case 'ОшибкаДляПримера':
      return addDatas('pttptptpt')
  }
}
</script>

<template>
  <div class="main">
    <h2> Пример Composition API + TypeScript , Pinia, TS, Axios, Vue-router</h2>
    <div class="content">
      <div class="part">
        <h3>Используется Element-Plus</h3>
        <el-select v-model="language" clearable>
          <el-option
              v-for="item in languages"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        <br><br>
        <el-button disabled v-if="language.length===0">
          Создать
        </el-button>
        <el-button type="primary" v-else @click="clicked()">
          Создать
        </el-button>
        <el-button disabled v-if="tableData && tableData.length===0">
          Очистить
        </el-button>
        <el-button type="primary" v-else @click="clearTable()">
          Очистить
        </el-button>

        <div class="counter">Всего: {{ tableData.length }}</div>
        <div class="window">
          <el-table
              v-loading="isWaiting"
              ref="multipleTableRef"
              highlight-current-row
              :data="tableData"
              @select="selectTable"
              style="width: 100%; height: 350px"
          >
            <el-table-column property="id" label="ID" width="85"/>
            <el-table-column property="name" sortable label="Сущность"/>
          </el-table>
        </div>
      </div>

      <!--      <div class="part">-->
      <!--        <h3>Вручную созданный комбобокс + axios</h3>-->
      <!--      </div>-->
    </div>
  </div>
</template>
<style scoped>
.main {
  text-align: center;
}

.content {
  display: flex;
  gap: 20px;
}

.part {
  width: 100%;
  padding: 5px 20px;
  border: 10px solid #b3f0b3;
  border-radius: 30px;
  max-width: 730px;
  margin: auto;
  background: white;
}

.window {
  width: 100%;

  background: #bbb;
  margin-top: 30px;
}

.counter {
  margin-top: 30px;
  margin-bottom: -30px;
}
</style>