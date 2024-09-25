<script>
export let entry = [];

</script>

<div>
    <div class="card w-72 shadow-xl justify-center">
        <figure>
            <img
                    src={entry.imgLink}
                    alt="Shoes" />
        </figure>
        <div class="card-body space-y-3">
            <h2 class="card-title">{entry.title}</h2>
            <p>{entry.description}</p>
            <div class="card-actions justify-center">
                <a href={entry.extLink} target="_blank">
                    <button class="btn btn-primary" >See Repository</button>
                </a>
            </div>
        </div>
    </div>
</div>