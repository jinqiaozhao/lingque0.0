<template>
	<div class="hello">
		<head-top></head-top>
		<adv-wrap></adv-wrap>
		<adv-one></adv-one>
		<adv-two></adv-two>
		<privilege></privilege>
		<partners></partners>
		<about-us></about-us>
	</div>
</template>

<script>
	import headTop from '@/components/common/lq-header.vue';
	import advOne from '@/components/index/advantage-1.vue';
	import advTwo from '@/components/index/advantage.vue';
	import privilege from '@/components/index/privilege.vue';
	import partners from '@/components/index/partners.vue';
	import aboutUs from '@/components/index/aboutus.vue';
	import advWrap from '@/components/index/adv-wrap.vue';
	export default {
		//name: 'HelloWorld',
		components:{
			headTop,advOne,advTwo,privilege,partners,aboutUs,advWrap
		},
		data() {
			 return {
			 	msg: 'Welcome to ling-que'
			 }
		},
		
	}
	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
