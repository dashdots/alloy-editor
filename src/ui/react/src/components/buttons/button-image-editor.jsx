(function () {
    'use strict';

    /**
     * The ButtonImage class inserts an image to the content.
     *
     * @class ButtonImage
     */
    var ButtonImageEditor = React.createClass({
        mixins: [AlloyEditor.ButtonStateClasses],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default image
             */
            key: 'imageEditor'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();
            var img = this.props.editor.get('nativeEditor').getSelection().getSelectedElement();
            return (
                <button aria-label={AlloyEditor.Strings.editImage} className={cssClass} data-type="button-image-editor"
                        onClick={()=>{ButtonImageEditor.editorHandler('edit',img);}}
                        tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.editImage}>
                    <span className="ae-icon-image"/>
                </button>
            );
        },
    });
    AlloyEditor.Buttons[ButtonImageEditor.key] = AlloyEditor.ButtonImageEditor = ButtonImageEditor;
}());