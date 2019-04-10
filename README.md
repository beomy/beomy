# Beomy.js

View 단을 처리하는 MVVM 형태의 프레임워크 입니다.

Vue.js의 옵션 형태와 Data Binding, React.js의 render 함수를 합친 형태입니다. sample 디렉토리에 사용 예제 한가지를 업로드 하였습니다.

## 사용 방법

기본 사용 방법은 아래 코드와 같습니다.

<pre><code>const beomy = new Beomy({
    el: #beomy-root, // 바인딩할 HTML의 root element를 정의합니다.
    data () {
        // View와 바인딩할 값들을 정의합니다.
    },
    method: {
        // 바인딩 한 값들을 가공하기 위한 함수들을 정의합니다.
    },
    render () {
        // el 옵션에 정의한 element 밑으로 그려질 DOM을 리턴하는 함수입니다.
    }
})</code></pre>

## Data Binding 원리

Vue.js의 Data Binding 형태를 따랐습니다.

### Object.defineProperty

Object.defineProperty를 사용하여 data 옵션에 정의 된 값들을 get과 set으로 분리하였습니다. data 옵션에 정의 된 값이 set이 될 경우, render 함수가 호출됩니다.

Oject 안에 있는 Object (2중 구조)까지 Data Binding을 지원 합니다.

<pre><code>data () {
    return {
        objInObj: {
            obj: 'test' // 2중 구조까지 Data Bindg을 지원합니다.
        }
    }
}</code></pre>

### Array

Array의 Data Binding을 위해 push, pop, shift, unshift, splice, sort,reverse 함수를 재정의 하였습니다. 위의 7가지 메소드를 사용하지 않고 Array의 값을 변경할 경우 Data Binding을 지원하지 않습니다.

<pre><code>let list = [1, 2, 3]
list.push(4) // Data Binding 됩니다.
list[2] = 4 // Data Binding 되지 않습니다.</code></pre>

## render

data 옵션에 정의 된 값들이 변경 될 경우 render 함수가 호출됩니다. render 함수의 반환 값을 Object.defineProperty 메소드를 사용하여 get, set으로 분리하였습니다. render 함수가 반환 하는 HTML 값이 이전 HTML 값과 다를 때 DOM을 다시 그리는 간단한 구조입니다.

## DoTo List

1. Component 구조화
2. Event 바인딩
3. Virtual DOM