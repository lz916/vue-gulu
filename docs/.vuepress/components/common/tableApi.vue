<template>
    <div class="table-api-wrapper">
        <table>
            <th>
                <td>参数</td>
                <td>说明</td>
                <td>类型</td>
                <td>可选值</td>
                <td>默认值</td>
            </th>
            <tr v-for="(item, index) in apiData" :key="index">
                <td>{{item.params}}</td>
                <td>{{item.desc}}</td>
                <td>{{item.type}}</td>
                <td>{{item.OptionalValue}}></td>
                <td>{{item.defalutValue}}></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableApi',
    props: {
        apiData: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="scss"></style>