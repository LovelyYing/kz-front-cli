!(function(){
		let a=Object.create(null);
		a.name='ins';
		a.id=1;
		a.value=0;
		a.add=function(v){
			if(typeof v === 'number'){
				this.value+=v;
			}
		}
		window.testa=a;
		//看看中文有没有乱码
})();