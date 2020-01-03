<template>
  <div class="content">
    <h2 class="app-name">SHRTN</h2>
    <form @submit.prevent="submitForm">
      <input id="inputUrl" type="text" placeholder="e.g www.example.com" v-model="inputUrl" />
      <button>GO!</button>
    </form>
    <div v-show="showGeneratedUrl" class="clipboard" v-clipboard="() => shortenedUrl" v-on:click>
      <p>Link Generated!</p>
      <div class="generated-shortcode">
        <span>{{shortenedUrl}}</span>
        <copyToClipboard />
      </div>
    </div>
    <div class="note">
      This app uses
      <a href="http://shrtco.de">shrtco.de's</a> API
    </div>
  </div>
</template>

<script>
import copyToClipboard from "./clipCopyIcon";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      inputUrl: "",
      shortenedUrl: "",
      showGeneratedUrl: false
    };
  },
  components: {
    copyToClipboard
  },

  methods: {
    submitForm() {
      //disable input and button
      document.querySelector("#inputUrl").setAttribute("disabled", "disabled");
      document.querySelector("button").setAttribute("disabled", "disabled");

      axios
        .post(`https://api.shrtco.de/v2/shorten?url=${this.inputUrl}`)
        .then(response => {
          if (!response.data.ok) {
            return;
          }

          this.shortenedUrl = response.data.result.full_short_link2;
          this.showGeneratedUrl = true;
          this.inputUrl = "";
          document.querySelector("#inputUrl").removeAttribute("disabled");
          document.querySelector("button").removeAttribute("disabled");
        });
    }
  }
};
</script>


<style lang="scss">
.content {
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 90%;

  .app-name {
    margin: 0;
    text-align: center;
    color: white;
    font-size: 3rem;
    letter-spacing: -6px;
  }

  .clipboard {
    background: white;
    border-radius: 4px;
    padding: 3% 0 2% 0;
    margin-top: 10%;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.356);
    text-align: center;

    &:hover {
      cursor: pointer;
    }

    p {
      margin: 0;
    }

    .generated-shortcode {
      display: flex;
      justify-content: center;
      font-size: 32px;
      padding: 2%;

      span {
        margin-right: 20px;
        color: #20123a;
        font-weight: bold;
      }
    }
  }

  .note {
    color: white;
    text-align: center;
    margin-top: 10%;
    font-size: 12px;

    a {
      color: #f12711;
    }
  }
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.356);

  input {
    border: 0;
    padding: 3% 4%;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 80%;
  }

  button {
    cursor: pointer;
    border: 0;
    background: #f12711; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f5af19,
      #f12711
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f5af19,
      #f12711
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding: 3% 4%;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 20%;
    color: white;
  }
}
</style>
