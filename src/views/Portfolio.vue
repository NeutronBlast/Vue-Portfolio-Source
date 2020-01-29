<template>
<div id="all">
    <br><br>
    <div class="container">
        <b-row class="mx-auto" id="snakes-ladders">
            <b-col md="12" lg="12" sm="12">

                <b-card :img-src="require(`../assets/all-work/snakesladders.png`)" img-alt="Card image" img-left class="mb-3 folio-card">
                    <h1>{{$t('snakes_tit')}}</h1>
                    <b-card-text>
                        {{$t('snakes_desc')}}<br><br>

                        <strong></strong> {{$t('snakes_goals')}}
                        <ul>
                            <li>{{$t('snakes_l1')}}</li>
                            <li>{{$t('snakes_l2')}}</li>
                            <li>{{$t('snakes_l3')}}</li>
                            <li>{{$t('snakes_l4')}}</li>
                        </ul>
                    </b-card-text>

                    <a class="btn btn-primary float-right" href="https://github.com/metalsonic21/N1-SnakesLadders">{{$t('btn_details')}}</a>
                </b-card>
                <small>January 17th, 2020</small>
                <br>
                <small> <strong>Resources:</strong> C#</small>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque expedita ab temporibus nihil consectetur tenetur vitae, officiis voluptatibus adipisci nostrum, quod laudantium, animi accusamus quaerat? Similique quod alias exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolorem. Nam, minus rerum, eveniet consectetur quo iure aliquam, id necessitatibus nobis quaerat soluta sequi est animi voluptas ex dolorem reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus quia ipsa et nostrum hic deleniti architecto magnam optio quis velit praesentium corporis accusantium nobis rem, assumenda illum natus placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum vel magnam adipisci ullam explicabo asperiores harum repellendus facilis molestiae alias porro laudantium, ducimus perferendis doloremque libero. Natus, alias perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ab voluptas explicabo dignissimos dolores sequi fugit laboriosam provident iste minus distinctio ex similique assumenda laudantium expedita quam recusandae fugiat quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut repellendus blanditiis, nisi beatae, sapiente repudiandae vitae, tempore tempora ipsa at ratione eveniet. Modi ipsa iure quod, accusantium quidem consequuntur porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur quia. Mollitia, nostrum iure consectetur praesentium magni, odio harum fugiat aliquam maiores, facere numquam saepe reiciendis vero iusto consequuntur cupiditate.</p>
            </b-col>
        </b-row>
    </div>
</div>
</template>

<script>
export default {

}
</script>
