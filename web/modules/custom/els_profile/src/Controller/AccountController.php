<?php
/**
 * @file
 * Contains Drupal\els_profile\Controller\AccountController
 */
 
namespace Drupal\els_profile\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Drupal\image\Entity\ImageStyle;

class AccountController extends ControllerBase {
	
	//Constructor
	public function __construct() {
		//TODO
	}
	
	public function userDetails() {
		
		$user = self::getloggedUser();

		$bundle[] = [
			'#theme' => 'user_account',
			'#user' => $user
		];
		
		return $bundle;
	}
	
	public function getloggedUser() {
		$user = [];
		
		$userdetails = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
		
		
		$user['mail'] = $userdetails->get('mail')->value;
		$user['username'] = $userdetails->get('name')->value;
		$user['uid'] = $userdetails->get('uid')->value;
		$user['company_name'] = $userdetails->get('field_company_name')->value;
		$user['contact_address'] = $userdetails->get('field_contact_address')->value;
		$user['contact_fullname'] = $userdetails->get('field_contact_person_fullname')->value;
		$user['contact_number'] = $userdetails->get('field_contact')->value;
		$picpath =  $userdetails->get('user_picture')->entity->uri->value;
		
		$user['user_picture'] = ImageStyle::load('thumbnail')->buildUrl($picpath);
		return $user;
	}
	
}