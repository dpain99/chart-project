# Hướng dẫn sử dụng
## Chart

Đây là hướng dẫn sử dụng cho các chart.

- Chart1: Biểu đồ cột
- Char3: Biểu đồ radar
- Char5: Biểu đồ tròn

## Chart1 - Biểu đồ cột

| Props | Chi tiết | Kiểu dữ liệu |
| ------ | ------ | ----- |
| title | tên của biểu đồ | string
| type | kiểu của biểu đồ, để thay đổi màu sắc | 'kim', 'moc', 'thuy', 'hoa', 'tho' |
| detail | định nghĩa label và giá trị đi kèm label.Tổng giá trị của 2 value trong 1 object là 10. Ví dụ : value1: 3.4, value2: 6.6 |array, phần tử là các object với các cặp {label1: string, value1: number, label2: string, value2: number}, với label1 - value1 là cọc đồ thị bên trái, label2 - value2 là cọc đồ thị bên phải |
| flex1, flex2 | độ cong biểu đồ | flex1: number, flex2: number tương ứng biểu đồ 1, 2 |
- Ví dụ:
```sh
  <Chart1
          title={"Tính cách khuynh hướng"}
          detail={[
            {
              label1: "Thực tế / Không thích mạo hiểm",
              value1: 3,
              label2: "Phiêu lưu / Tinh thần mạo hiểm",
              value2: 7,
            },
            {
              label1: "Tuân theo tự nhiên",
              value1: 4,
              label2: "Kế hoạch / Tự chủ",
              value2: 6,
            },
            {
              label1: "Hướng ngoại / Dễ gần",
              value1: 4.8,
              label2: "Hướng nội / Không thích chú ý",
              value2: 5.2,
            },
            {
              label1: "Tư duy nhóm",
              value1: 3.5,
              label2: "Tư duy độc lập",
              value2: 6.5,
            },
            {
              label1: "Dễ đồng cảm",
              value1: 7,
              label2: "Thích thao túng",
              value2: 3,
            },
            {
              label1: "Nhạy cảm / Hay suy nghĩ",
              value1: 3.6,
              label2: "Giỏi xử lý căng thẳng",
              value2: 6.4,
            },
          ]}
          type="moc"
        />
```
- Kết quả:
![chart1](https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/414986757_1391836301755998_1060101709197655160_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=jS4zlmG9xx4AX_ONOdN&_nc_ht=scontent.fvii1-1.fna&oh=00_AfAlEPtVz8-WS_kSctUKQ0399_2i0TSq6TAcB82rufq-4Q&oe=65936230)



## Char3 - Biểu đồ radar

| Props | Chi tiết | Kiểu dữ liệu |
| ------ | ------ | ----- |
| data | dữ liệu của biểu đồ. Điểm bắt đầu của biểu đồ là từ đỉnh bên tay phải, chạy theo hướng kim đồng hồ. Giá trị value chạy từ 1-> 6 tương ứng với 6 vòng. | array, phần tử là các cặp object kiểu {label: string, value: string}
| type | kiểu của biểu đồ, để thay đổi màu sắc | 'kim', 'moc', 'thuy', 'hoa', 'tho' |


- Ví dụ:
```sh
   <Chart3
          data={[
            {
              label: "Nhóm truyền thông",
              value: 6,
            },
            {
              label: "Nhóm giáo dục",
              value: 6,
            },
            {
              label: "Nhóm kinh doanh",
              value: 4,
            },
            {
              label: "Nhóm nghệ thuật",
              value: 4,
            },
            {
              label: "Nhóm luật pháp",
              value: 5,
            },
            {
              label: "Nhóm dịch vụ",
              value: 6,
            },
            {
              label: "Nhóm khoa học kỹ thuật",
              value: 5,
            },
            { label: "Nhóm y tế", value: 5 },
          ]}
          type={"tho"}
        />
```

- Kết quả: 
![chart3](https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/415028314_1391839105089051_8475325630028989499_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=AMBmWM0IOkUAX9WEWw8&_nc_ht=scontent.fvii1-1.fna&oh=00_AfBH7_SU2vcm1Ke1f2t6U06B1Zi3hEasAmd4HhDRN3lkqQ&oe=6593ACE8)

## Char5 - Biểu đồ tròn
| Props | Chi tiết | Kiểu dữ liệu |
| ------ | ------ | ----- |
| data | dữ liệu của biểu đồ. Gồm tên biểu đồ, nhãn biểu đồ, mô tả cho nhãn (nếu có), và giá trị đường tròn. Max giá trị là 100 | array, phần tử là các cặp object kiểu {label: string, value: string}
| type | kiểu của biểu đồ, để thay đổi màu sắc | 'kim', 'moc', 'thuy', 'hoa', 'tho' |

- Ví dụ:
```sh
 <Chart5
        data={[
          {
            title: "Thiên thời",
            label: "Sinh xuất",
            description: "Không tốt",
            value: 30,
          },
          {
            title: "Địa lợi",
            label: "Đồng hành",
            description: "Rất tốt",
            value: 100,
          },
          {
            title: "Tổng quan",
            label: "Bình ổn",
            value: 59,
          },
        ]}
        type={"hoa"}
      />
```
- Kết quả:
![chart3](https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/414669693_1391840091755619_4155773155336742427_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=HqwCPUGJLH4AX-JC8Hc&_nc_ht=scontent.fvii1-1.fna&oh=00_AfABjMqaFNE7ZAfkFZobS8UeqkYpn7973OupCsxgdwVH8g&oe=65941DE0)


**Good Luck!**
