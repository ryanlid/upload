# upload

## 图片上传文档

- HTTP 请求方式 ：	POST
- URL : https://upload.oonnnoo.com/upload

### 请求参数

| 参数名称 | 类型 | 是否必须 | 描述 |
| --- | --- | --- | --- |
| upfile | File |	 是 | 表单字段名称。上传图片用到 |

### 返回参数

| 名称 | 示例值 | 描述 |
| --- | --- | --- |
| code | success | 上传文件状态。正常情况为 success。出现错误时为 error |
| originalname | smile.jpg|上传文件时所用的文件名 |
| mimetype | image/jpeg|上传文件的 mimetype |
| filename | HJh2MX8Nz.jpg|上传后的文件名 |
| size | 27571 | 上传文件的大小 |
| url | https://static.oonnnoo.com/upload/images/HJh2MX8Nz.jpg | 图片服务器地址 |

### 返回示例

```json
{
  "code": "success",
  "data": {
    "originalname": "smile.jpg",
    "mimetype": "image/jpeg",
    "filename": "HJh2MX8Nz.jpg",
    "size": 27571,
    "url": "https://static.oonnnoo.com/upload/images/HJh2MX8Nz.jpg"
  }
}
```

### 错误列表
 // TODO
