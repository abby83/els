<?php
/**
 * @file
 * Contains \Drupal\els_utils\Form\ReferralForm.
 */
namespace Drupal\els_utils\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Messenger\Messenger;

class ReferralForm extends FormBase {
	
	/**
     * {@inheritdoc}
    */
	public function getFormId() {
		return 'refer_to_us';
	}
	
	public function buildForm(array $form, FormStateInterface $form_state) {
		$form['#prefix'] = '<div class="row justify-content-center">
								<div class="section-title">
									<h2>'.t('Refer To Us').'</h2>
								</div>
								<div class="col-lg-7" data-aos="fade-up" date-aos-delay="0"><div class="text-center">'.t("ELS team welcome highly valued customer and onboard them as our premium members. We will appreciate your effort to bring close the premium members from every corner of the Globe ").'</div>';
		$form['#suffix'] = '</div></div>';
		
		$form['company_name'] = array(
		  '#type' => 'textfield',
		  '#title' => t('Company Name:'),
		  '#required' => TRUE,
		);
		$form['contact_person'] = array(
		  '#type' => 'textfield',
		  '#title' => t('Contact Person:'),
		  '#required' => TRUE,
		);
		$form['company_email'] = array(
		  '#type' => 'email',
		  '#title' => t('Company Email:'),
		  '#required' => TRUE,
		);
		$form['company_phone'] = array (
		  '#type' => 'tel',
		  '#title' => t('Company Contact Number'),
		  '#required' => TRUE,
		);
		
		$form['other_remarks'] = array (
		  '#type' => 'textarea',
		  '#title' => ('Other Remarks:'),
		  
		);
		
		$form['my_captcha_element'] = array(
			'#type' => 'captcha',
		);
		
		$form['actions']['#type'] = 'actions';
		$form['actions']['submit'] = array(
		  '#type' => 'submit',
		  '#value' => $this->t('Submit'),
		  '#button_type' => 'primary',
		);
		return $form;
	}
	
	public function validateForm(array &$form, FormStateInterface $form_state) {
		
		if(strlen($form_state->getValue('company_phone')) < 10) {
		  $form_state->setErrorByName('company_phone', $this->t('Please enter a valid Contact Number'));
		}
	}
	
	public function submitForm(array &$form, FormStateInterface $form_state) {
		$user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
		
		$send_mail = new \Drupal\Core\Mail\Plugin\Mail\PhpMail(); 
		$from = $user->get('mail')->value;
		$to = \Drupal::config('system.site')->get('mail');
		$sender_name = $user->get('name')->value;
		
		$comp_name = $form_state->getValue('company_name') ;
		$cont_person = $form_state->getValue('contact_person') ;
		$comp_email = $form_state->getValue('company_email') ;
		$cont_number = $form_state->getValue('company_phone') ;
		$comp_remarks = $form_state->getValue('other_remarks') ;
		
		$message["headers"] = array("content-type" => "text/html",
									"MIME-Version" => "1.0",
									"reply-to" => $from,
									"from" => "sender name <'".$user->get('name')->value."'>"
									);
		$message["to"] = $to;
		$message["subject"] = t("Customer reference to review");
		
		$renderable = [
			"#theme" => "refer_to_us_mail",
			"#comp_name" => $comp_name,
			"#cont_person" => $cont_person,
			"#comp_email" => $comp_email,
			"#cont_number" => $cont_number,
			"#comp_remarks" => $comp_remarks,
			"#sender" => $sender_name,
		];
		$mail_body = \Drupal::service('renderer')->renderPlain($renderable);
		$message["body"] = $mail_body;
		
		$result = $send_mail->mail($message);
		
		if($result['result'] === true){
			\Drupal::messenger()->addStatus(t('Thank You for valuable reference to Executive Luxury Service Inc. Our team will review the referred customer and soon onboard them to ELS services.'));
		} else {
			\Drupal::messenger()->addError(t('Unable to send emails, please contact administrator!'));
		}
  }
}