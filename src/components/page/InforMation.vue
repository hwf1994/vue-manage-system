<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-setting"></i> 基本设置
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          :rules="rules"
        >
          <el-form-item
            label="机构名称"
            prop="name"
          >
            <el-input
              class="input-name"
              v-model="form.name"
              placeholder="请填写机构名称"
            ></el-input>

            <span class="name-xz">限15个长度</span>

          </el-form-item>
          <el-form-item
            label="机构简称"
            prop="zcname"
          >
            <el-input
              class="input-name"
              v-model="form.zcname"
              placeholder="请填写机构简称"
            ></el-input>
            <span class="name-xz">限8个长度</span>
          </el-form-item>
          <el-form-item label="宣传语">
            <el-input
              type="textarea"
              maxlength="40"
              show-word-limit
              v-model="form.desc"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择器">
            <el-select
              v-model="form.region"
              placeholder="请选择"
            >
              <el-option
                key="bbk"
                label="步步高"
                value="bbk"
              ></el-option>
              <el-option
                key="xtc"
                label="小天才"
                value="xtc"
              ></el-option>
              <el-option
                key="imoo"
                label="imoo"
                value="imoo"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                value-format="yyyy-MM-dd"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col
              class="line"
              :span="2"
            >-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%;"
              ></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="城市级联">
            <el-cascader
              :options="options"
              v-model="form.options"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="选择开关">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="多选框">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                label="步步高"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="小天才"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="imoo"
                name="type"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选框">
            <el-radio-group v-model="form.resource">
              <el-radio label="步步高"></el-radio>
              <el-radio label="小天才"></el-radio>
              <el-radio label="imoo"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文本框">
            <el-input
              type="textarea"
              rows="5"
              v-model="form.desc"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
            >表单提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'baseform',
    data() {
        return {
            options: [
                {
                    value: 'guangdong',
                    label: '广东省',
                    children: [
                        {
                            value: 'guangzhou',
                            label: '广州市',
                            children: [
                                {
                                    value: 'tianhe',
                                    label: '天河区'
                                },
                                {
                                    value: 'haizhu',
                                    label: '海珠区'
                                }
                            ]
                        },
                        {
                            value: 'dongguan',
                            label: '东莞市',
                            children: [
                                {
                                    value: 'changan',
                                    label: '长安镇'
                                },
                                {
                                    value: 'humen',
                                    label: '虎门镇'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南省',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区'
                                }
                            ]
                        }
                    ]
                }
            ],
            form: {
                name: '',
                zcname: '',
                region: '',
                date1: '',
                date2: '',
                delivery: true,
                type: ['步步高'],
                resource: '小天才',
                desc: '',
                options: []
            },
            rules: {
                name: [
                    { required: true, message: '请输入机构名称', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ],
                zcname: [
                    { required: true, message: '请输入机构简称', trigger: 'blur' },
                    { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    }
};
</script>

<style>
.input-name {
    width: 300px;
}
.name-xz {
    padding-left: 10px;
    font-size: 14px;
    text-align: right;
    vertical-align: middle;
    color: #cccccc;
    line-height: 32px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>