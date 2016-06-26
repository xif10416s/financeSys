package org.fxi.common.utils;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 * Created by xifei on 16-3-14.
 */
public class MailUtils {
	public static final Properties props = new Properties();
	static {
		try {
			props.load(MailUtils.class.getResourceAsStream("/mail-check.properties"));
		} catch (Exception e) {
			// TODO log
			e.printStackTrace();
		}
	}

	public static void sendMail(String emailTo ,String title,String content) {
		try {
			InternetAddress from = new InternetAddress(props.getProperty("mail.username"));
			InternetAddress to = new InternetAddress(emailTo);
			Authenticator authenticator = new Authenticator() {
				@Override
				protected PasswordAuthentication getPasswordAuthentication() {
					String username = props.getProperty("mail.username");
					String password = props.getProperty("mail.password");
					return new PasswordAuthentication(username, password);
				}
			};
			Session mailSession = Session.getInstance(props, authenticator);
			MimeMessage message = new MimeMessage(mailSession);
			message.setFrom(from);
			message.setRecipient(MimeMessage.RecipientType.TO, to);
			message.setSubject(title);
			message.setContent(content, "text/html;charset=UTF-8");
			Transport.send(message);
		} catch (Throwable e) {
			// TODO log
			System.out.println("email -->" + emailTo);
			e.printStackTrace();
		}
	}
}
