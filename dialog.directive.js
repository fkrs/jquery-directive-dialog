(function($){
  
  var dialog = {
    
    init: function(){
      this._bindEvents();
    },
    
    _bindEvents: function(){
      var self = this;
      
      $('[data-dialog-open]').click(function(){
        var selector = $(this).data('dialog-open');
        if(!selector) return;
        self._openDialog(selector);
      });
      
      $('[data-dialog-close]').click(function(){
        var selector = $(this).data('dialog-close');
        if(!selector) return;
        self._closeDialog(selector);
      });
    },
    
    _openDialog: function(selector){
      var $dialog = $(selector);
      if(!$dialog[0]) return;
      
      this._closeDialog('.dialog--visible');
      
      //add block class
      $dialog.addClass('dialog--block');
      
      setTimeout(function(){
        $dialog.addClass('dialog--visible');
      }, 10);
    },
    
    _closeDialog: function(selector){
      var $dialog = $(selector);
      if(!$dialog[0]) return;
      
      //remove block class
      $dialog.removeClass('dialog--visible');
      
      setTimeout(function(){
        $dialog.removeClass('dialog--block');
      }, 300);
    }
    
  };
  
  dialog.init();
  
}(jQuery));
