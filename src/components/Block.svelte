<script>
export let entry = [];
export let buttonMessage = "See Link";

</script>

<div>
    <div class="card w-72 shadow-xl justify-center">
        <figure>
            <img
                    src={entry.imgLink}
                    alt={entry.alt} />
        </figure>
        <div class="card-body space-y-3">
            <h2 class="card-title">{entry.title}</h2>
            <p>{entry.description}</p>
            <div class="card-actions justify-center">
                <a href={entry.extLink} target="_blank">
                    <button class="btn btn-primary" >{buttonMessage}</button>
                </a>
            </div>
        </div>
    </div>
</div>