<template>
	<div class="box">
		<div>
			<p class="shopping">商城正在搭建中</p>
			<img src="../assets/timg.gif" class="imgurl"/>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
			}
		},
		mounted() {
			
		},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.box{
		width: 100%;
		height: 100%;
		background: #fa743e;
		text-align: center;
	}
	.box div{
		
		padding-top: 50%
	}
	.shopping{
		margin:0;
		
		margin-left: 25%;
		width: 40%;
		float: left;
		font-size: 20px;
		color: white;
		text-align: center;
		line-height: 40px

	}
	.imgurl{
			width: 10%;
			float: left
	}
</style>