//pages URL for geting informationim
const baseURL = "http://localhost:8080";
const userInfoURL = `${baseURL}/info/user`;
const hashTagsCloudURL = `${baseURL}/info/hashtag_cloud?`;
const firstTweetUrl = `${baseURL}/info/tweet`;
const signOutURL = `${baseURL}auth/signout`;

const overviewSection = document.querySelector(".overview");
const hashTagCloudSection = document.querySelector(".tweets-cloud");
const firstTweetSection = document.querySelector(".first-tweet");


let fetchResponseAndParse = async (url, element) => {

    let json = "";

    try {

        let response = await fetch(url);
        json = await response.json();
    } catch (e) {

    }

    return json;

};
//get general information about user in async mode
let getOverview = async () => {


    let response = await fetchResponseAndParse(userInfoURL);
    let table = `<table class="overview-table">
                   <tr>
                    <td class="overview-table__image">
                     <img src=${response['profileImageURL']} alt="profile">
                    </td>
                    <td class="overview-table__info">
                        <table class="overview-table__detail-table">
                        
                        </table>
                    </td>
                   </tr>
                  </table>`;

    overviewSection.querySelector(".content-item__description").insertAdjacentHTML("beforeend", table);

    const detailTable = document.querySelector(".overview-table__detail-table");

    for (let key in response) {
        if (response.hasOwnProperty(key)) {
            if (key === 'profileImageURL') continue;
            let row = detailTable.insertRow();
            row.insertCell(0).innerHTML = key;
            row.insertCell(1).innerHTML = response[key];
        }
    }

};


// gets hashtags from application api style it and show on user_info.html page with flex
let getTagsCloud  = async (tweets = 50) => {

    let url = hashTagsCloudURL + tweets;
    let response = await fetchResponseAndParse(url);

    console.log(response);


};

let getFirstLastTweets = async () => {


};



//function signing out from application remove accesstoken stored in backend and redirect back to sign in webpage

let signOutButton = document.body.querySelector("button");
signOutButton.addEventListener('click', async () =>{
    await fetchResponseAndParse(signOutURL);
    document.location.href = "/";
}, false);


window.addEventListener("load", ()=>{
    getOverview();
    getTagsCloud();
    getFirstLastTweets();
});
