<!-- SECTION HTML -->
<template>
  <div id="content" class="chat">
    <aside></aside>
    <main>
      <div id="message">
        <Message
          :infos="message"
          v-for="message in messageList"
          :key="message.id"
        />
      </div>
      <div id="textbox">
        <form
          action="#"
          method="POST"
          name="message"
          @submit.prevent="envoiMessage"
        >
          <input
            type="text"
            name="textbox"
            placeholder="Message"
            v-model="texteMessage"
          />
        </form>
        <div id="refresh">Rafraîchir</div>
      </div>
    </main>
  </div>
</template>

<!-- SECTION CODE -->
<script>
import Message from "../components/Message";

export default {
  name: "Chat",
  components: {
    Message,
  },
  data() {
    return {
      texteMessage: "",
      messageList: [],
    };
  }, // FIN DATA
  methods: {
    envoiMessage() {
      console.log(this.texteMessage);
    },
  }, // FIN DES MÉTHODES
  mounted() {
    this.messageList = [
      {
        id: 1,
        username: "usager1",
        message: "Salut, ça va?",
        created_at: "2021-03-27 15:31:15",
        updated_at: "2021-03-27 15:31:15",
      },
      {
        id: 2,
        username: "usager2",
        message: "Super, toi?",
        created_at: "2021-03-27 15:32:25",
        updated_at: "2021-03-27 15:32:25",
      },
      {
        id: 3,
        username: "usager1",
        message: "J'ai besoin de t'emprunter de l'argent",
        created_at: "2021-03-27 15:32:41",
        updated_at: "2021-03-27 15:32:41",
      },
      {
        id: 4,
        username: "usager2",
        message: "Bon... T'es encore allé au casino?",
        created_at: "2021-03-27 15:33:41",
        updated_at: "2021-03-27 15:33:41",
      },
    ];
  },
};
</script>

<!-- SECTION CSS -->
<style scoped>
.chat aside {
  width: 300px;
  height: 100%;
  background-color: #2b2b2b;
  padding: 10px;
}

.chat aside .user {
  display: flex;
  align-items: center;
  padding: 6px 0px;
  border-bottom: 1px solid #444;
}
.chat aside .icon {
  width: 30px;
  fill: rgb(48, 184, 82);
}
.chat aside .username {
  margin-left: 5px;
  font-size: 18px;
}

.chat main {
  display: flex;
  padding: 0px 20px;
  flex-direction: column;
  flex: 1;
}

#textbox {
  display: flex;
  padding-bottom: 20px;
  align-items: center;
}

#textbox form,
#textbox input {
  width: 100%;
  flex: 1;
}

#textbox input {
  border-radius: 8px;
  border: none;
  padding: 15px 15px;
  background: #464646;
  font-size: 16px;
  color: #ccc;
}

#textbox .refresh {
  margin: 15px;
  color: white;
  background-color: #0f5781;
  padding: 15px 15px;

  width: auto;
  border-radius: 8px;
  border: none;
}

#textbox .refresh:hover {
  background-color: #0c4769;
}
</style>