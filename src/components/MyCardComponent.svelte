<script>
    import {NAME, SUBTITLE} from "../data/constants.js";
</script>

<div class="grid grid-cols-1 space-y-16 place-items-center p-10">
<!--    profile picture-->
    <div class="avatar">
        <div class="w-64 rounded-full">
            <img alt="Bryce McWhirter's Head Shot" src="/profilePicture.jpg" />
        </div>
    </div>

<!--    brief bio (1-2 sentenences)-->
    <div class="text-justify">
        <h1 class="text-2xl text-center font-bold">{NAME}</h1>
        <p >{SUBTITLE} Learn more about me <a class="text-primary font-bold" href="/about">here</a></p>
    </div>

<!--    CTA Subscribe to my newsletter/-->
<div class="text-justify">
    <h1 class="font-bold text-xl text-center">Subscribe To My Newsletter</h1>
    <p >I send a weekly newsletter where I share what I'm working on along with 5 interesting things. </p>
</div>
<!--    email input-->

    <div>
        <iframe class="w-auto" title="substack" src="https://brycemcwhirter.substack.com/embed"></iframe>
    </div>

<!--    contact info hi@brycemcwhirter.com-->
    <div class="text-justify">
        <h1 class="font-bold text-xl">Say Hello Anytime!</h1>
        <p class="text-justify">hi@brycemcwhirter.com</p>
    </div>


</div>