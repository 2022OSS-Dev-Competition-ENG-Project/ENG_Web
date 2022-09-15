# :globe_with_meridians:!ENG?-Web
>**2022년 공개 SW 개발자대회** <br>
**프로젝트 기간 : 2022.07 ~**
>
>**안전불감증 솔루션**

<br>

## :office:주요서비스
> **ENG 서비스 관리를 위한 웹**
1. 서비스 이용을 위한 회원 서비스를 제공합니다.
2. 관리자는 시설물을 등록하여 해당 건물을 관리할 수 있습니다.
3. 공지를 통해 앱 사용자에게 안전 정보를 제공할 수 있습니다.
4. 안전소통게시판와 신고현황을 통해 보다 쉽게 건물을 관리 및 이용자간 소통할 수 있습니다.
5. 등록된 시설 위치의 온습도를 통해 화재예측 서비스를 제공받을 수 있습니다.

<br>

## :file_folder:프로젝트 폴더 구조
```
📦 Eng
│
+ 🗂 public
│     └── 🗂 img
│
+ 🗂 src
│     │
│     │── 🗂 Components
│     │        │── 🗂 Address
│     │        │       └── 🗂 PopupDom
│     │        │       └── 🗂 PopupPostCode
│     │        │
│     │        │── 🗂 Layout
│     │        │       └── 🗂 Header
│     │        │       └── 🗂 Footer
│     │        │       └── 🗂 Navigation
│     │        │       └── 🗂 Write
│     │        │
│     │        └── 🗂 Table
│     │                 └── 🗂 Table
│     │                 └── 🗂 TableColumn
│     │                 └── 🗂 TableRow
│     │
│     └── 🗂 Pages
│              │── 🗂 Account
│              │        └── 🗂 FindID
│              │        └── 🗂 FindPW
│              │        └── 🗂 ResetPW
│              │        └── 🗂 SignUp
│              │
│              │── 🗂 Building
│              │        └── 🗂 BuildingList
│              │        └── 🗂 BuildingRegister
│              │        └── 🗂 QR
│              │        
│              │── 🗂 Main
│              │        └── 🗂 Main
│              │        └── 🗂 MainBanner
│              │        └── 🗂 MainLog
│              │
│              │── 🗂 Manager
│              │        └── 🗂 ManagerRegister
│              │        └── 🗂 Search
│              │
│              │── 🗂 Notice
│              │        └── 🗂 NoticeList
│              │        └── 🗂 NoticeView
│              │        └── 🗂 NoticeWrite
│              │
│              │── 🗂 Post
│              │        └── 🗂 PostList
│              │        └── 🗂 PostView
│              │
│              └── 🗂 Report
│                       └── 🗂 ReportList
│                       └── 🗂 ReportView   
```



##  :herb: 설치 
<br>

## :cactus: 프로젝트 초기 설정 
<br>


## :computer: UI Image
<details>
<summary>회원 서비스</summary>
<img src=https://user-images.githubusercontent.com/75602377/190301697-76be6c8a-7d6a-4663-b4a4-3edd7e2a24f1.png>
<img src=https://user-images.githubusercontent.com/75602377/190303501-35a45401-fd94-4180-8ed4-766d497cb0f9.png>
<img src=https://user-images.githubusercontent.com/75602377/190303564-a134c531-0ead-4f7a-8752-5c35cedf0f0c.png>
<img src=https://user-images.githubusercontent.com/75602377/190303655-f238c73c-6306-42fb-b5bd-4a0a6c186b8e.png>
<img src=https://user-images.githubusercontent.com/75602377/190303733-e65e06f0-5d61-46c4-8d8b-b425438ac4a0.png>
</details>

<details>
<summary>시설물 및 매니저 등록</summary>
<img src=https://user-images.githubusercontent.com/75602377/190303847-a830f242-11ba-4662-bb35-c64e55d95acf.png>
<img src=https://user-images.githubusercontent.com/75602377/190303889-a7032d86-b3f6-486c-9cc1-98888d2484d8.png>
<img src=https://user-images.githubusercontent.com/75602377/190303944-675e1785-263c-40b5-b01d-d67f4f89e5ef.png>
<img src=https://user-images.githubusercontent.com/75602377/190303986-271f643f-7430-49bb-aea1-e34bfd828fb0.png>
<img src=https://user-images.githubusercontent.com/75602377/190304025-3e5f64d0-fb76-4476-aa89-ed7b037395a4.png>
</details>

<details>
<summary>시설물 관리</summary>
<img src=https://user-images.githubusercontent.com/75602377/190304269-44ff9877-e30b-4369-b2ff-09f6b53be14d.png>
<img src=https://user-images.githubusercontent.com/75602377/190304373-fcac8145-f081-4153-8b39-ef05972fc533.png>
<img src=https://user-images.githubusercontent.com/75602377/190304648-0c285fae-6cbf-43cd-b7ed-92b343c6ff88.png>
<img src=https://user-images.githubusercontent.com/75602377/190304681-5fc1caa4-7a59-4ff9-ab2d-d3a9b9a9b55e.png>
<img src=https://user-images.githubusercontent.com/75602377/190304732-4823de17-e857-4901-932c-f00468230ace.png>
<img src=https://user-images.githubusercontent.com/75602377/190304780-808db1ca-dc21-4e5d-938f-db582ccb3a89.png>
<img src=https://user-images.githubusercontent.com/75602377/190304820-4835c7b6-1239-43f7-9cd9-4839e14f9ceb.png>
<img src=https://user-images.githubusercontent.com/75602377/190304876-7dcff62f-aa82-404d-a966-59ad21060e80.png>
</details>
<br>

## :earth_americas:개발/배포 환경
``` 
서버 개발 플랫폼 : Ubuntu Linux 22.04.1 LTS
서버 개발 환경 : IntelliJ
서버/AI 개발 언어 : Java 11
서버 개발 프레임워크 : SpringBoot 2.7.2
```


<br>

## :angel:개발자

- 조승현 [Cho-Seung-Hyeon](https://github.com/Cho-Seung-Hyeon) : ENG Project Web 클라이언트 개발

