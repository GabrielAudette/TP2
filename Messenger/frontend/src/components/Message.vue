<!-- SECTION HTML -->

<template>
    <div class="message">
        <div class="ligne-titre">
            <p class="nom">{{ infos.username }}</p>
            <p class="date">{{ infos.updated_at }}</p>
        </div>
        <p class="texte">{{ infos.message }}</p>
        
    </div>
</template>

<!-- SECTION CODE -->
<script>
export default {
    name: 'Message',
    props: ['infos']
};
</script>

<!-- SECTION CSS -->
<style scoped>
    .message {
    margin: 25px 0px;
    background-color: #0f5781;
    padding: 5px 10px;
    border-radius: 5px;
    width: fit-content;
}

.message p {
    margin: 0px;
}

.message .ligne-titre {
    display: flex;
}

.message .nom {
    font-weight: bold;
    color: #777;
}

.message .date {
    font-size: 13px;
    color: #666;
    margin-left: 10px;
    margin-top: 2px;
}

.message .texte {
    margin: 5px 0px;
}
</style>
