import React, { useState } from 'react';
import {User} from './User'
import {Picture} from './Picture'
import {CommentHeader} from './CommentHeader'
import {Comment} from './Comment'
import {AddComment} from './AddComment'
import test from './test.php'

export function Post(props){
    const [comment , setComment] = useState()
    const [likeNum , setLikeNum] = useState(12);
    const [name , setName] = useState("")
    const [age , setAge] = useState(0)

    var xhr;

	function getFunc() {
		var irum = name;
		var nai = age;
		//get방식은 주소에 데이터를 붙여서 전송

		var fName = "046_javascript_37_XmlHttpRequest_get_post.jsp?name=" + irum + "&age=" + nai; 
		xhr = new XMLHttpRequest();
		xhr.open("get", fName, true);
		xhr.onreadystatechange = function() { //폴백
			if (xhr.readyState == 4) {
				if (xhr.status == 200) { //200은 잘넘어왔단 것이다.
					process();
				} else {
					alert("요청오류 : " + xhr.status);
				}
			}
		}
		xhr.send(null); //get방식일때 null
	}
	function postFunc() {
		var irum = name;
		var nai = age;
		xhr = new XMLHttpRequest();
		xhr.open("post", "./post.jsp", true);
		xhr.onreadystatechange = function() { //폴백
			if (xhr.readyState == 4) {
				if (xhr.status == 200) { //200은 잘넘어왔단 것이다.
					process();
				} else {
					alert("요청오류 : " + xhr.status);
				}
			}
		}
		//post방식은 xhr객체에 데이터를 붙여서 전송
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("name=" + irum + "&age=" + nai); 
	}

	

	function process() {
		var data = xhr.responseText;
		alert("요청 결과 : " + data);
	}
    return(
        <div>
            <div className="post">
                <User more={props.more} profile={props.profile}/>
                <Picture img={"https://source.unsplash.com/900x900/?nature,water"}/>
                <CommentHeader heart={props.heart} fill_heart={props.fill_heart} comment={props.comment} send={props.send} bookmark={props.bookmark} likeNum={likeNum} setLikeNum={setLikeNum}/>
                <Comment profile={props.profile} user={"dowap"} comment={comment} setComment={setComment} likeNum={likeNum}/>
                <AddComment comment={setComment}/>
                <form name="frm">
                    이름 : <input type="text" name="name" value={name} onChange={e=> setName(e.target.value)} /><br /> 
                    나이 : <input type="text" name="age" value={age} onChange={e=> setAge(e.target.value)}/><br />
                    <input type="button" value="get" id="btnGet" onClick={e=> getFunc()}/>
                    <input type="button" value="post" id="btnPost" onClick={e=> postFunc()}/>
	            </form>
            </div>
        </div>
    )
} 